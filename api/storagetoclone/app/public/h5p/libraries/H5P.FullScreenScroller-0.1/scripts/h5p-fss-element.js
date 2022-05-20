H5P.FullScreenScroller.Element = (function ($) {
  "use strict";

  function Element(options, contentId) {
    var self = this;
    H5P.EventDispatcher.call(self);

    var $element = $('<div>', {
      'class': 'h5p-fss-element',
      css: {
        backgroundColor: options.visuals.backgroundColor,
        color: options.visuals.foregroundColor
      }
    });

    var $inner = $('<div>', {
      'class': 'h5p-fss-element-inner'
    }).appendTo($element);

    if (options.image) {
      var $image = $('<img>', {
        'class': 'h5p-fss-element-image',
        src: H5P.getPath(options.image.path, contentId),
        css: {
          height: options.imageHeight ? options.imageHeight + 'vmin' : undefined
        }
      }).appendTo($inner);
    }

    if (options.title) {
      var $title = $('<div>', {
        'class': 'h5p-fss-element-title',
        text: options.title
      }).appendTo($inner);
    }

    if (options.description) {
      $inner.append($('<div>', {
        'class': 'h5p-fss-element-description',
        html: options.description
      }));
    }

    if (options.link && options.link.url && options.link.title) {

      var $link = $('<a>', {
        'class': 'h5p-fss-element-anchor',
        href: options.link.url.protocol + options.link.url.url,
        text: options.link.title,
        target: 'blank',
        css: {
          backgroundColor: options.visuals.backgroundColor,
          color: options.visuals.foregroundColor,
          borderColor: options.visuals.foregroundColor
        }
      }).hover(
        function () {
          $(this).css ({
            backgroundColor: options.visuals.foregroundColor,
            color: options.visuals.backgroundColor,
            borderColor: options.visuals.backgroundColor
          });
        },
        function () {
          $(this).css({
            backgroundColor: options.visuals.backgroundColor,
            color: options.visuals.foregroundColor,
            borderColor: options.visuals.foregroundColor
          });
        }
      );

      $inner.append($('<div>', {
        'class': 'h5p-fss-element-link'
      }).append($link));
    }

    self.getDomElement = function () {
      return $element;
    };
  }

  Element.prototype = Object.create(H5P.EventDispatcher.prototype);
  Element.prototype.constructor = Element;

  return Element;
})(H5P.jQuery);
