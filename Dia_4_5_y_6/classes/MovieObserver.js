/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function MovieObserver(){ 

    this.handle = function(_event, _state, _movie){
        if (_state == "play"){
            console.log("Playing: " + _movie +"...");
        }
        else if (_state == "stop"){
                console.log("Stoping: " + _movie +"...");
            }
    }
    $.subscribe("movies", this.handle); 
} 

(function($) {
  var o         = $({});
  $.subscribe   = o.on.bind(o);
  $.unsubscribe = o.off.bind(o);
  $.publish     = o.trigger.bind(o);
}(jQuery));