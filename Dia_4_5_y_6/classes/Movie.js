/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var Movie = (function (_title, _rating, _id){ 

    return function (_title, _rating, _id){ 
        var title = _title;
        var rating = _rating;
        var id = _id;
        var cast = [];
        
        this.getTitle=function(){return  title}
        this.setTitle = function(_title){ title = _title} 
        this.getRating = function(){  return  rating } 
        this.setRating = function(_rating){ rating = _rating} 
        this.getId = function(){  return  id } 
        this.setId = function(_id){ id = _id} 
        this.play = function(){
            $.publish("movies", ["play",title]);
            } 
        this.stop = function(){
            $.publish("movies", ["stop",title]);
            } 
        this.setCast = function(_cast){ cast = _cast} 
        this.getCast = function(){return cast} 
        };
})();

var social = function() {
  this.share = function() {
    console.log('Sharing '+this.getTitle()+' with '+friendName);
    };
  this.like = function() {
    console.log('Like!');
    };
  return this;
}

social.call(Movie.prototype);
