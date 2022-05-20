H5P.FullScreenScroller.ProgressDots = (function ($) {
  "use strict";

  function Dot(index, cb) {
    var self = this;

    var $dot = $('<div>', {
      'class': 'h5p-fss-dot',
      click: function () {
        cb(index);
      }
    });

    self.toggleActive = function (activate, backgroundColor, foregroundColor) {
      $dot.css({
        'box-shadow': activate ? '0 0 0 1px ' + foregroundColor : '',
        'background-color': foregroundColor
      });
    };

    self.getDomElement = function () {
      return $dot;
    };
  }

  function ProgressDots(num) {
    var self = this;
    H5P.EventDispatcher.call(self);

    var dots = [];
    var $dots = [];

    var $dotContainer = $('<div>', {
      'class': 'h5p-fss-dot-wrapper'
    });

    for (var i = 0; i < num; i++) {
      var dot = new Dot(i, function (index) {
        self.trigger('clicked', {index: index});
      });
      dots.push(dot);
      $dots.push(dot.getDomElement());
    }

    $dotContainer.append($dots);

    self.getDomElement = function () {
      return $dotContainer;
    };

    self.setActive = function (index, backgroundColor, foregroundColor) {
      for (var i = 0; i < dots.length; i++) {
        dots[i].toggleActive(i === index, backgroundColor, foregroundColor);
      }
    };

    self.setColor = function (color) {
      $dotContainer.css('color', color);
    };
  }

  ProgressDots.prototype = Object.create(H5P.EventDispatcher.prototype);
  ProgressDots.prototype.constructor = ProgressDots;

  return ProgressDots;
})(H5P.jQuery);
