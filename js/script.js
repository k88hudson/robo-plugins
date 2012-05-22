/* Author:
Kate
*/

document.addEventListener( "DOMContentLoaded", function( e ){

	var popcorn = Popcorn("#video");
	
	/*
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
*/
popcorn.on("canplayall", init );

function init() {
	//POPCORN SPEAK
	popcorn.speak({
		start: 1,
		end: 6,
		text: "Hey guys, so this is a robot video",
		pitch: 70,
		showText: true,
		pluginPath: "js/plugins/speak/",
		target: "speak",
		callback: function( container ) {
			$("#speak").addClass("rumble");
			//$("#speak > span").lettering();
			//$("#speak > span > span").addClass("rumble");
			//$("#video").fadeIn();
		}
	});
	popcorn.speak({
		start: 7,
		end: 11,
		text: "Robots are going to take over the world.",
		pitch: 30,
		showText: true,
		pluginPath: "js/plugins/speak/",
		target: "speak",
	});

	popcorn.speak({
		start: 18,
		end: 21,
		text: "I was just thinking that popcorn is total ee awesome.",
		pitch: 30,
		speed: 200,
		pluginPath: "js/plugins/speak/",
		target: "speak",
	});

	popcorn.speak({
		start: 12,
		end: 15,
		text: "Fabulous, yeah!",
		pitch: 100,
		showText: true,
		pluginPath: "js/plugins/speak/",
		target: "speak",
	});

	//POPCORN SPEAK
	popcorn.zoink({
		start: 9,
		end: 10,
		text: "BLAM",
		classes: "fx bottom right",
		textClasses: "rumble",
		top: 20,
		left: 70,
		target: "video-container"
	});

	//POPCORN SPEAK
	popcorn.zoink({
		start: 18,
		end: 21,
		text: "I was just thinking that popcorn is <strong>totally</strong> awesome. Don't you agree?",
		textClasses: "rumble",
		top: 50,
		left: 62,
		style: "speech",
		classes: "top left",
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
      });

	popcorn.flickr({
        start: 20,
        end: 30,
        tags: "pony",
        target: "flickr",
        padding: "0px",
        width: "50%",
        height: "50%",
        numberofimages: 4
    });

	popcorn.mute();
	popcorn.off("canplayall", init);
}

}, false);




