// PLUGIN: SPEAK

(function ( Popcorn ) {

/**
  Popcorn zoink
 */
  Popcorn.plugin( "zoink", {
      manifest: {
        about: {
          name: "Popcorn zoink Plugin",
          version: "0.1",
          author: "Kate Hudson @k88hudson",
          website: "http://github.com/k88hudson"
        },
        options: {
          start: {
            elem: "input",
            type: "number",
            label: "In"
          },
          end: {
            elem: "input",
            type: "number",
            label: "Out"
          },
          text: {
            elem: "input",
            type: "text",
            label: "Text to speak:"
          },
          top: {
            elem: "input",
            type: "number",
            label: "Top:"
          },
          left: {
            elem: "input",
            type: "number",
            label: "Left:"
          },
          target: "zoink-container"
        }
      },
      _setup: function( options ) {
        var target = document.getElementById( options.target ),
            _args = {};

        if ( !target && Popcorn.plugin.debug ) {
          throw new Error( "target container doesn't exist" );
        }
        
        speechBubble( target, options );
        options.callback && options.callback( options._container );

        function speechBubble( target, args ) {
          !args && ( args = {} );

          var container = document.createElement("div"),
              width = args.width || 200,
              top = args.top || 0,
              left = args.left || 0,
              i;

          container.style.position = "absolute";
          container.style.top = top + "%";
          container.style.left = left + "%";
          container.style.width = width + "px";
          container.classList.add("pop");

          target.appendChild( container );

          if( typeof args.text === "string" ) {
            _makeBubble( { text: args.text, style: args.style, classes: args.classes } );
          }
          else if ( typeof args.text === "object" ) {
            for(i = 0; i<args.text.length; i++) {

              args.text[i].classes || ( args.text[i].classes = "" );
              //Set the default type to be none instead of speech
              if( args.text[i].style === undefined) {
                args.text[i].style = "none";
              }
              if( i !== args.text.length - 1 ) {
                args.text[i].classes += " pipe";
              }
              _makeBubble( { text: args.text[i].text, style: args.text[i].style, classes: args.text[i].classes + " full-width" } );
            }
          }

          function _makeBubble( bubbleArgs ) {
            var bubble = document.createElement("div"),
                innerText = document.createElement("div"),
                text = bubbleArgs.text || "",
                style = bubbleArgs.style || "speech",
                classes = bubbleArgs.classes || "bottom right",
                textClasses = options.textClasses;

            innerText.innerHTML = text;
            textClasses && ( innerText.className = "text " + textClasses ) || ( innerText.className = "text");
            bubble.appendChild( innerText );
            container.appendChild( bubble );
            _makeTriangle( bubble, { style: style, classes: classes } );
            
            //Now, export the container.
            options._container = container;
          }

          function _makeTriangle( bubble, args ) {
            !args && ( args = {} );
            args.style || ( args.style = "" );

            var elem,
                triangle,
                pipe,
                ctx,
                classes = args.classes || "bottom right";

            //Check if the input is a string or an actual element
            if (typeof bubble === "string") {
              elem = document.getElementById(bubble);
            } else {
              elem = bubble;
            }

            //Set the base classes
            elem.className =  "speechBubble " + args.style + " " + classes;

            //Speech bubble
            if( args.style === "speech" || args.style === "thought" ){
              
              triangle = document.createElement("canvas");
              ctx = triangle.getContext("2d");

              triangle.width = 40;
              triangle.height = 60;
              triangle.className = "canvas"
              elem.appendChild( triangle );

              //Draw according to the style
              args.style === "speech" && drawSpeech( ctx );
              args.style === "thought" && drawThought( ctx );
            }

            //Pipe
            if ( args.classes && args.classes.indexOf("pipe") !== -1 ){
              elem.className +=  " connected pipe";
              pipe = document.createElement("div");
              pipe.className = "pipe";
              elem.appendChild( pipe );
            }

            function drawSpeech(ctx) {
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(0.4, 0.3);
              ctx.bezierCurveTo(0.4, 0.3, 17.8, 26.3, 15.1, 41.9);
              ctx.bezierCurveTo(15.1, 41.9, 26.2, 26.3, 23.4, 0.3);
              ctx.fillStyle = "rgb(255, 255, 255)";
              ctx.fill();
              ctx.lineWidth = 2;
              ctx.stroke();
              ctx.restore();
            }

            function drawThought(ctx) {
               // circle1
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(13.5, 7.0);
                ctx.bezierCurveTo(13.5, 10.6, 10.6, 13.5, 7.0, 13.5);
                ctx.bezierCurveTo(3.4, 13.5, 0.5, 10.6, 0.5, 7.0);
                ctx.bezierCurveTo(0.5, 3.4, 3.4, 0.5, 7.0, 0.5);
                ctx.bezierCurveTo(10.6, 0.5, 13.5, 3.4, 13.5, 7.0);
                ctx.closePath();
                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.stroke();

                // circle2
                ctx.beginPath();
                ctx.moveTo(17.5, 23.8);
                ctx.bezierCurveTo(17.5, 26.1, 15.6, 28.0, 13.2, 28.0);
                ctx.bezierCurveTo(10.9, 28.0, 9.0, 26.1, 9.0, 23.8);
                ctx.bezierCurveTo(9.0, 21.4, 10.9, 19.5, 13.2, 19.5);
                ctx.bezierCurveTo(15.6, 19.5, 17.5, 21.4, 17.5, 23.8);
                ctx.closePath();
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.stroke();

                // circle3
                ctx.beginPath();
                ctx.moveTo(27.5, 31.8);
                ctx.bezierCurveTo(27.5, 33.5, 26.0, 35.0, 24.2, 35.0);
                ctx.bezierCurveTo(22.5, 35.0, 21.0, 33.5, 21.0, 31.8);
                ctx.bezierCurveTo(21.0, 30.0, 22.5, 28.5, 24.2, 28.5);
                ctx.bezierCurveTo(26.0, 28.5, 27.5, 30.0, 27.5, 31.8);
                ctx.closePath();
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.restore();
            }
          }
        } //addSpeechBubble
  
      },
      start: function( event, options ) {
        console.log( options._container, options._container.classList );
        options._container.classList.add( "on" );
      },
    
      end: function( event, options ) {
        options._container.classList.remove( "on" );
      },
      _teardown: function( options ) {
        if( options._container && options._container.parentNode ) {
          options._container.parentNode.removeChild( options._container );
        }
      }
  });
})( Popcorn );
