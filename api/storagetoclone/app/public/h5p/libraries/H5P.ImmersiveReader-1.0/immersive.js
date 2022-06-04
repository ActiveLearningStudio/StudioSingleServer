var H5P = H5P || {};
 
H5P.ImmersiveReader = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      title: 'Default title',
      immersivecontent: 'Default content'
    }, options);
    // Keep provided id.
    this.id = id;
  };

  C.prototype.launchImmersiveReader = function () {
    console.log('launching immersve reader...');
    
    axios.get(window.location.origin + '/api/immersive')
    .then((response) => {
        console.log(response);
        var token = response.data.access_token;
        var subdomain = 'curriki';
        const data = {
            title: this.options.title,
            chunks: [{
                content: $.parseHTML(this.options.immersivecontent)[0].textContent,
                mimeType: "text/html"
            }]
        };

        ImmersiveReader.launchAsync(token, subdomain, data);
    });


  }
 
  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    console.log('H5P: Rendering immersive reader content type');
    $container.addClass("h5p-immersive");

    $container.append('<h1 class="immersive-title">' + this.options.title + '</h1>');
    $container.append('<div class="immersive-controls"><button class="immersive-launch-button">Launch Immersive Reader</button></div>')
    $container.append('<div class="immersive-content">'+ $.parseHTML(this.options.immersivecontent)[0].textContent +'</div>');

    $('.immersive-controls button').on('click', () => { this.launchImmersiveReader(); });
  };
 
  return C;
})(H5P.jQuery);