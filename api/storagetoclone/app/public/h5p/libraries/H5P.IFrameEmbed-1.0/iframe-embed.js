var H5P = H5P || {};

H5P.IFrameEmbed = function (options, contentId, contentData) {
  var $ = H5P.jQuery;
  var $iframe = null;
  this.$ = $(this);
  var self = this;

  options = H5P.jQuery.extend({
    width: "500px",
    minWidth: "300px",
    height: "500px",
    source: "",
    resizeSupported: true
  }, options);

  if (!this instanceof H5P.IFrameEmbed){
    return new H5P.IFrameEmbed(options, contentId);
  }

  this.attach = function ($wrapper) {
    this.wrapper = $wrapper;
    // Set up an iframe with the correct source, and append
    // it to '$wrapper'.

    var iFrameSource = '';

    if (options.source !== undefined) {
      if (options.source.trim().toLowerCase().substring(0, 4) === 'http') {
        iFrameSource = options.source;
      }
      else {
        iFrameSource = H5P.getContentPath(contentId) + '/' + options.source;
      }
    }

    // Mark as consumed
    this.triggerConsumed();

    if(this.isRoot()) {
      // Mark as completed
      this.triggerCompleted();
    }

    $iframe = $('<iframe/>', {
      src: iFrameSource,
      scrolling: 'no',
      frameBorder: 0,
      'class': 'h5p-iframe-content h5p-iframe-wrapper',
      css: {
        width: options.width,
        height: options.height,
        display: 'block'
      },
    });

    $wrapper.html('');
    $wrapper.append($iframe);

    if(options.resizeSupported === false) {
      /* Unfortunately fullscreen-button is not in DOM yet.
       * Therefore we need to remove it using a timer */
      setTimeout(function () {
        $('.h5p-enable-fullscreen').hide();
      }, 1);
    }

    this.$.trigger('resize');
  };

  this.resize = function () {
    // Set size of 'iframe' on startup, and when the browser
    // is resized, or enters fullscreen.
    if(options.resizeSupported) {
      $iframe.css(
        (H5P.isFullscreen) ? {width: '100%', height: '100%'} : getElementSize($iframe)
      );
    }
  };

  if (options.resizeSupported && this.on !== undefined) {
    this.on('resize', this.resize);
  }

  var getElementSize = function ($element) {
    // Get width of 'element' parent. Return width and height
    // so that 'element' scales (with the proper ratio) to fit
    // the parent. Make sure 'element' doesn't scale below
    // 'options.minWidth'.
    var elementMinWidth = parseInt(options.minWidth ,10);
    var elementSizeRatio = parseInt(options.height, 10) / parseInt(options.width, 10);
    var parentWidth = $element.parent().width();
    var elementWidth = (parentWidth > elementMinWidth) ? parentWidth : elementMinWidth;

    return {
      width: elementWidth + 'px',
      height: elementWidth * elementSizeRatio + 'px'
    };
  };


  // resize height of iframe to fit content
  if (options.resizeSupported) {
    var resizeIframe = setInterval(function () {
      var $content = $iframe.contents();
      if ($content && $content.find('html').length > 0 && $iframe.height() !== $iframe.contents().find('html').height()) {
        $iframe.css({
          height: $iframe.contents().find('html').height()
        });
      }
    }, 500);
    setTimeout(function( ) { clearInterval( resizeIframe ); }, 5 * 60 * 1000);
  }


  // This is a fix/hack to make touch work in iframe on mobile safari,
  // like if the iframe is listening to touch events on the iframe's
  // window object. (like in PHET simulations)
  window.addEventListener("touchstart", function () {});

  /**
   * Trigger the 'consumed' xAPI event when this commences
   *
   * (Will be more sophisticated in future version)
   */
  this.triggerConsumed = function () {
    var xAPIEvent = this.createXAPIEventTemplate({
      id: 'http://activitystrea.ms/schema/1.0/consume',
      display: {
        'en-US': 'consumed'
      }
    });
    this.trigger(xAPIEvent);
  };

  /**
   * Trigger the 'completed' xAPI event when this commences
   *
   * (Will be more sophisticated in future version)
   */
  this.triggerCompleted = function () {
    var xAPIEvent = this.createXAPIEventTemplate('completed');
    xAPIEvent.data.statement.result = {
      'completion': true
    };
    this.trigger(xAPIEvent);
  };

  /**
   * Get title, e.g. for xAPI.
   *
   * @return {string} Title.
   */
  this.getTitle = function () {
    return H5P.createTitle((contentData && contentData.metadata && contentData.metadata.title) ? contentData.metadata.title : 'Iframe Embedder');
  };


};
