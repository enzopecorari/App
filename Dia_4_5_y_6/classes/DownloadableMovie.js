/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

DownloadableMovie.prototype = new Movie();
DownloadableMovie.prototype.constructor=Movie;

function DownloadableMovie(_title, _rating, _id){ 
        //ver el tema de las variables y la herencia
        this.setTitle(_title);
        this.setRating(_rating);
        this.setId(_id);
        var downloader = MovieDownloader();
        
	this.download = function(){
        downloader.down(this.getTitle());
        } 
} 
