H5P.FullScreenScroller = (function ($) {
  'use strict';

  function FullScreenScroller(options, contentId){
    var self = this;

    // Data pages:
    var pages = [];

    // DOM pages:
    var $pages = [];

    var $presentation = $('<div>', {
      'class': 'h5p-fss-presentation'
    });

    var $wrapper = $('<div>', {
      'class': 'h5p-fss-wrapper'
    });

    var $smallScreen = $('<div>', {
      'class': 'h5p-fss-small-screen'
    }).append($('<div>', {
      'class': 'h5p-fss-small-screen-title',
      text: options.title
    }));

    var $loadingScreen = $('<div>', {
      'class': 'h5p-fss-loading-page'
    }).append($('<div>', {
      'class': 'h5p-fss-loading-icon'
    }));

    var progressDots = new H5P.FullScreenScroller.ProgressDots(options.pages.length);
    progressDots.on('clicked', function (event) {
      $.fn.fullpage.moveTo(event.data.index+1);
    });

    var $startButton = H5P.JoubelUI.createButton({
      'class': 'h5p-fss-start-button',
      text: options.showContent,
      on: {
        click: function () {
          startPresentation();
        }
      }
    }).appendTo($smallScreen);

    var $closeButton = $('<div>', {
      'class': 'h5p-fss-close-button',
      click: function () {
        H5P.exitFullScreen();
      }
    });

    for (var i = 0; i < options.pages.length; i++) {
      var el = new H5P.FullScreenScroller.Page(options.pages[i], contentId, i);
      var $page = el.getDomElement();

      el.on('clicked', function (event) {
        $.fn.fullpage.moveTo(event.data.index+2);
      });

      $pages.push($page);
      pages.push(el);
    }

    var initPresentation = function () {
      $wrapper.fullpage({
        onLeave: function(index, nextIndex, direction) {
          var foregroundColor = pages[nextIndex-1].getForegroundColor();
          var backgroundColor = pages[nextIndex-1].getBackgroundColor();
          $pages[index-1].removeClass('fadein')
          pages[nextIndex-1].setActive();
          progressDots.setActive(nextIndex-1, backgroundColor, foregroundColor);
          progressDots.setColor(foregroundColor);
          $closeButton.css('color', foregroundColor);
        },
        afterRender: function () {
          setTimeout (function () {
            $pages[0].addClass('fadein');
            progressDots.setActive(0, pages[0].getBackgroundColor(), pages[0].getForegroundColor());
            // Resize pages
            resize();
          }, 0);
        }
      });

      //leavePresentation();
      $('html, body').css('overflow', 'visible');
    };

    var leavePresentation = function () {
      self.$container.removeClass('h5p-fss-loaded');
      $('html, body').css('overflow', 'visible');
    };

    var resize = function () {
      var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      self.$container.toggleClass('h5p-fss-portrait', height/width > 1.4);
    };

    var startPresentation = function () {
      $('html, body').css('overflow', 'hidden');

      self.$container.addClass('h5p-fss-loading');
      $.fn.fullpage.moveTo(1);
      if (!options.settings.initialFullscreen && options.settings.realFullscreen) {
        H5P.fullScreen(self.$container, self, leavePresentation);
      }
      else {
        H5P.semiFullScreen(self.$container, self, leavePresentation);
      }

      setTimeout(function () {
        self.$container.removeClass('h5p-fss-loading').addClass('h5p-fss-loaded');
        resize();
      }, 1000);
    };

    self.attach = function ($container) {
      self.$container = $container;

      self.$container.css({
        'z-index': options.settings.zIndex
      });

      $wrapper.append($pages);
      $presentation.append($wrapper);
      if (options.settings.showNavigation) {
        $presentation.append(progressDots.getDomElement());
      }
      $presentation.append($closeButton);
      $container.append($presentation);
      $container.append($smallScreen);
      $container.append($loadingScreen);
      $loadingScreen.css({
        'color': pages[0].getForegroundColor(),
        'background': pages[0].getBackgroundColor(),
      });

      initPresentation();

      if (options.settings.initialFullscreen) {
        startPresentation();
      }

      self.on('resize', resize);
    };
  }

  /**
   * Adds Open Sans font from google
   */
  window.WebFontConfig = {
    google: { families: [ 'Open+Sans:300,800' ] }
  };
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);

  return FullScreenScroller;
})(H5P.jQuery);
