
// Load the application once the DOM is ready, using `jQuery.ready`:
$(function(){

  // Movie Model
  // ----------

  // Our basic **Movie** model has `title` and `order` attributes.
  var Movie = Backbone.Model.extend({

    // Default attributes for the movie item.
    defaults: function() {
      return {
        title: "untitle",
        year: "1996",
        synopsis: "Here the synopsis",
        order: Movies.nextOrder()
      };
    },

    // Ensure that each movie created has `title`.
    initialize: function() {
      if (!this.get("title")) {
        this.set({"title": this.defaults.title});
      }
      if (!this.get("synopsis")) {
        this.set({"synopsis": this.defaults.synopsis});
      }
      if (!this.get("year")) {
        this.set({"year": this.defaults.year});
      }
    },

    // Remove this Movie from *localStorage* and delete its view.
    clear: function() {
      this.destroy();
    }

  });

  // Movie Collection
  // ---------------

  // The collection of movies is backed by *localStorage* instead of a remote
  // server.
  var MovieList = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: Movie,

    // Save all of the movie items under the `"movies"` namespace.
    localStorage: new Store("movies-backbone"),


    // We keep the Movies in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },

    // Movies are sorted by their original insertion order.
    comparator: function(movie) {
      return movie.get('order');
    }

  });

  // Create our global collection of **Movies**.
  var Movies = new MovieList;

  // Movie Item View
  // --------------

  // The DOM element for a movie item...
  var MoviesView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",

    // Cache the template function for a single item.
    template: _.template($('#item-template').html()),

    // The DOM events specific to an item.
    events: {
      "dblclick .view"  : "edit",
      "click a.destroy" : "clear",
      "keypress .edit"  : "updateOnEnter",
      "keypress .editY"      : "updateOnEnter",
      "keypress .editS"      : "updateOnEnter"
    },

    // The MoviesView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Movie** and a **MoviesView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
    },

    // Re-render the titles of the movie item.
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.input = this.$('.edit');
      return this;
    },


    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function() {
      this.$el.addClass("editing");
      //this.input.focus();
    },

    
    // Close the `"editing"` mode, saving changes to the movie.
    close: function() {
      this.input = this.$('.edit');
      var value = this.input.val();
      if (!value) this.clear();
      this.model.save({title: value});
      
      this.input = this.$('.editY');
      value = this.input.val();
      if (!value) this.clear();
      this.model.save({year: value});
      
      this.input = this.$('.editS');
      value = this.input.val();
      if (!value) this.clear();
      this.model.save({synopsis: value});
      this.$el.removeClass("editing");
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function(e) {
      if (e.keyCode == 13) this.close();
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.clear();
    }

  });

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  var AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: $("#movieapp"),



    // Delegated events for creating new items, and clearing completed ones.
    events: {
      "keypress #new":  "createOnEnter"
    },

    // At initialization we bind to the relevant events on the `Movies`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting movies that might be saved in *localStorage*.
    initialize: function() {

      this.input = this.$("#new");

      Movies.bind('add', this.addOne, this);
      Movies.bind('reset', this.addAll, this);
      Movies.bind('all', this.render, this);

      this.footer = this.$('footer');
      this.main = $('#main');

      Movies.fetch();
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      

      if (Movies.length) {
        this.main.show();
        this.footer.show();
      } else {
        this.main.hide();
        this.footer.hide();
      }

    },

    // Add a single movie item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function(movie) {
      var view = new MoviesView({model: movie});
      this.$("#movie-list").append(view.render().el);
    },

    // Add all items in the **Movies** collection at once.
    addAll: function() {
      Movies.each(this.addOne);
    },

    // If you hit return in the main input field, create new **Movie** model,
    // persisting it to *localStorage*.
    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.input.val()) return;

      Movies.create({title: this.input.val()});
      this.input.val('');
    }


  });
  
  var App = new AppView;

});