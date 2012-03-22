/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

define(["models/model"], function(Model) {
        function Director( _name ){
            Model.call( this );
            this.name = _name;
            this.quotes = [];
            return( this );
        }
        Director.prototype = Object.create( Model.prototype );
        Director.prototype.getName = function(){return this.name};
        Director.prototype.setName = function(_name){name = _name}; 
        Director.prototype.setQuotes = function(_quotes){quotes = _quotes}; 
        Director.prototype.getQuotes = function(){return quotes}; 
        Director.prototype.speak = function(){
        var q = this.getQuotes();
        $('#quote').html(this.getName()+" says: "+q[Math.round(Math.random()*q.length)]);
  		

        }; 
        return (Director);
    }
    
    
);