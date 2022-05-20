var H5P = H5P || {};

H5P.FacebookPageFeed = (function ($) {

  /**
   * Constructor function.
   */
  function C(options, id) {
    this.$ = $(this);

    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      fbUrl: 'https://www.facebook.com/h5ptechnology',
      fbColorScheme: 'light',
      fbForceWall: false,
      fbHeader: true,
      fbHeight: '500',
      fbShowBorder: true,
      fbShowFaces: true,
      fbStream: true,
      fbWidth: '338'
    }, options);
    // Keep provided id.
    this.id = id;
  }


  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    var self = this;
    // Set class on container to identify it as a Page Facebook feed
    // container.  Allows for styling later.
    $container.addClass("h5p-fbtweet");

    // Creates the Box wrapper
    var fbBox = $(document.createElement('div'))
            .attr({"id": "fb-root"})
            .appendTo($container);

    if(this.options.fbColorScheme === 'dark'){
        fbBox.attr({"class": "dark-background"});
    }

    // Create a connection to Facebook SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

    var fbContent = $(document.createElement('div'));
    fbContent.addClass('fb-like-box');
    fbContent.attr({
        "data-href": this.options.fbUrl,
        "data-colorscheme": this.options.fbColorScheme,
        "data-header": this.options.fbHeader,
        "data-show-border": this.options.fbShowBorder,
        "data-show-faces": this.options.fbShowFaces,
        "data-stream": this.options.fbStream,
        "data-height": this.options.fbHeight,
        "data-width": this.options.fbWidth,
        "data-force-wall": this.options.fbForceWall
    });
    fbContent.appendTo($container);

  };

  return C;
})(H5P.jQuery);
