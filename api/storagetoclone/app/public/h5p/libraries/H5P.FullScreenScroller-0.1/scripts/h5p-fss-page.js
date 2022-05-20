H5P.FullScreenScroller.Page = (function ($) {
  "use strict";

  function Page(options, contentId, index) {
    var self = this;
    H5P.EventDispatcher.call(self);
    var elements = [];
    var isSinglePage = options.length === 1;

    var $page = $('<div>', {
      'class': 'h5p-fss-page section ' + (isSinglePage ? 'single-page' : 'double-page')
    });

    self.getDomElement = function () {
      return $page;
    };

    self.setActive = function () {
      $page.addClass('fadein');
    };

    self.getForegroundColor = function () {
      return options[options.length-1].visuals.foregroundColor;
    };

    self.getBackgroundColor = function () {
      return options[options.length-1].visuals.backgroundColor;
    };

    var $inner = $('<div>', {
      'class': 'h5p-fss-inner'
    }).appendTo($page);


    for (var i = 0; i < options.length; i++) {
      var element = new H5P.FullScreenScroller.Element(options[i], contentId);
      elements.push(element);
      $inner.append(element.getDomElement());
    }

    if (index === 0) {
      // If first page, add a help icon:
      $inner.append($('<div>', {
        'class': 'h5p-fss-element-mouse'
      }));
    }

    // Add down arrow
    $inner.append($('<div>', {
      'class': 'h5p-fss-element-arrow',
      click: function () {
        self.trigger('clicked', {index: index});
      },
      css: {
        color: self.getForegroundColor()
      }
    }));
  }

  Page.prototype = Object.create(H5P.EventDispatcher.prototype);
  Page.prototype.constructor = Page;

  return Page;
})(H5P.jQuery);
