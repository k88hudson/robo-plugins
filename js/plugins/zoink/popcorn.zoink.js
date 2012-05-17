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
        var target = document.getElementById( options.target );

        if ( !target && Popcorn.plugin.debug ) {
          throw new Error( "target container doesn't exist" );
        }

        options._container = document.createElement( "div" );
        options._container.classList.add( "zoink-container" );
        options.style === "thought" && options._container.classList.add( "oval-speech" );
        options._container.classList.add( "pop" );

        options._container.innerHTML = options.text;

        options._container.style.top = options.top + "%";
        options._container.style.left = options.left + "%";

        target.appendChild( options._container );

        options.callback && options.callback( options._container );
  
      },
      start: function( event, options ) {
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
