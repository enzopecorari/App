/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

define(["./model","./director"], function(Model,Director) {
        function Movie( _title, _rating, _id ){
            Model.call( this );
            this.title = _title;
            this.rating = _rating;
            this.id = _id;
            this.cast = [];
            return( this );
            this.director = new Director();
        }
        Movie.prototype = Object.create( Model.prototype );
        Movie.prototype.getTitle = function(){return this.title};
        Movie.prototype.setTitle = function(_title){ title = _title};
        Movie.prototype.getDirector = function(){return this.director};
        Movie.prototype.setDirector = function(_director){ director = _director};
        Movie.prototype.setRating = function (_rating){ rating = _rating} 
        Movie.prototype.getId = function(){  return  id } 
        Movie.prototype.setId = function(_id){ id = _id} 
        Movie.prototype.play = function(){
            $.publish("movies", ["play",title]);
            } 
        Movie.prototype.stop = function(){
            $.publish("movies", ["stop",title]);
            } 
        Movie.prototype.setCast = function(_cast){ cast = _cast} 
        Movie.prototype.getCast = function(){return cast} 
        return (Movie);
    }
);
