/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



function MovieObserver(){ 

    $.subscribe("movies", 
                function(_state, _movie){
                    if (_state == "play"){
                        console.log("Playing: " + _movie +"...");
                    }
                    else if (_state == "stop"){
                            console.log("Stoping: " + _movie +"...");
                        }
                        
                    }
            ); 
} 

(function(d){
	var cache = {};
	d.publish = function(topic, args){
		cache[topic] && d.each(cache[topic], function(){
			this.apply(d, args || []);
		});
	};

	d.subscribe = function(topic, handler){		
		if(!cache[topic]){
			cache[topic] = [];
		}
		cache[topic].push(handler);
		return [topic, handler];
	};

	d.unsubscribe = function(handle){
		var t = handle[0];
		cache[t] && d.each(cache[t], function(idx){
			if(this == handle[1]){
				cache[t].splice(idx, 1);
			}
		});
	};
})(jQuery);
