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


	popcorn.mute();

	//POPCORN SPEAK
	popcorn.speak({
		start: 1,
		end: 5,
		text: "How cool is this?",
		pitch: 70,
		showText: true,
		pluginPath: "js/plugins/speak/",
		target: "speak",
		callback: function( container ) {
			$("#speak > span").lettering();
			$("#speak > span > span").addClass("rumble");
		}
	});

	//POPCORN SPEAK
	popcorn.zoink({
		start: 3,
		end: 6,
		text: "<img src=\"img/zoink.png\" />",
		top: 20,
		left: 70,
		target: "video-container"
	});

	//POPCORN SPEAK
	popcorn.zoink({
		start: 4,
		end: 8,
		text: "I was just thinking that popcorn is totally awesome. Don't you agree?",
		top: 20,
		left: 20,
		style: "thought",
		target: "video-container"
	});

}, false);




