/* Author:
Kate
*/

document.addEventListener( "DOMContentLoaded", function( e ){

	var popcorn = Popcorn("#video");
		popcorn.code({
		start:1,
		end: 7,
		onStart: function( options ) {
			document.getElementById("title-card").classList.add("on");
		},
		onEnd: function( options ) {
			document.getElementById("title-card").classList.remove("on");
		}
	});

popcorn.on("canplayall", init );

function init() {
	//POPCORN SPEAK
	popcorn.speak({
		start: 1,
		end: 3,
		text: "How cool is this?",
		pitch: 70,
		showText: true,
		pluginPath: "js/plugins/speak/",
		target: "speak",
		callback: function( container ) {
			$("#speak > span").lettering();
			$("#speak > span > span").addClass("rumble");
			$("#video").fadeIn();
		}
	});
	popcorn.speak({
		start: 4,
		end: 6,
		text: "I would like to tell you something",
		pitch: 30,
		showText: true,
		pluginPath: "js/plugins/speak/",
		target: "speak",
	});

	popcorn.speak({
		start: 7,
		end: 10,
		text: "Robots are going to take over the world and there's nothing you can do to stop us.",
		pitch: 120,
		showText: true,
		pluginPath: "js/plugins/speak/",
		target: "speak",
	});

	//POPCORN SPEAK
	popcorn.zoink({
		start: 6,
		end: 10,
		text: "<img src=\"img/zoink.png\" />",
		top: 20,
		left: 70,
		target: "video-container"
	});

	//POPCORN SPEAK
	popcorn.zoink({
		start: 18,
		end: 21,
		text: "I was just thinking that popcorn is totally awesome. Don't you agree?",
		top: 20,
		left: 20,
		style: "thought",
		target: "video-container"
	});

	popcorn.googlemap({
        start: 13,
        end: 18,
        type: "STAMEN-TONER", // STAMEN-WATERCOLOR, STAMEN-TERRAIN
        target: "map",
        lat: 37.7706,
        lng: -122.3782,
        zoom: 12
      })


	popcorn.volume(0.5);
	popcorn.off("canplayall", init);
}

}, false);




