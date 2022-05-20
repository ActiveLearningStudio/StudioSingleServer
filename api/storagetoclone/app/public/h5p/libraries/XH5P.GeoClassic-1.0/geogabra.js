var H5P = H5P || {};
 
H5P.GeoClassic = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      greeting: 'Hello world!',
      image: null
    }, options);
    // Keep provided id.
    this.id = id;
  };
 
  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    //$container.addClass("h5p-greetingcard");
	$container.attr("id","ggb-element");
    
	var ggbApp = new GGBApplet({"appName": "classic", "width": 800, "height": 600, "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true }, true);
    window.addEventListener("load", function() { 
        ggbApp.inject('ggb-element');
    });
  };
 
  return C;
})(H5P.jQuery);
