

$(function(){

	yepnope({
            test: Modernizr.geolocation,
            nope: 'scripts/geolocation.js'
	})
        yepnope({
            test: Modernizr.draganddrop && window.FileReader,
            nope: 'scripts/dropfile.js'
	})

	yepnope({
            test: Modernizr.webworkers,
            nope: 'scripts/fakeworker-0.1.js'
	})	

	yepnope({
            test: Modernizr.websockets,
            nope: ['scripts/swfobject.js','scripts/web_socket.js']
	})
        yepnope({
            test: Modernizr.mq(),
            nope: 'scripts/css3-mediaqueries.js'
        })


});