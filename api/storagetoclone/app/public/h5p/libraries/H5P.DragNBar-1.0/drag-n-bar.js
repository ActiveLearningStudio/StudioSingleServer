var H5P = H5P || {};

/**
 * Constructor. Initializes the drag and drop menu bar.
 *
 * @param {Array} buttons
 * @param {jQuery} $container
 * @returns {undefined}
 */
H5P.DragNBar = function (buttons, $container) {
  var that = this;

  this.overflowThreshold = 13; // How many buttons to display before we add the more button.

  this.buttons = buttons;
  this.$container = $container;
  this.dnd = new H5P.DragNDrop($container, true);
  this.dnd.snap = 10;
  this.newElement = false;

  this.dnd.startMovingCallback = function (event) {
    if (that.newElement) {
      that.dnd.adjust.x = 10;
      that.dnd.adjust.y = 10;
    }

    return true;
  };

  this.dnd.moveCallback = function (x, y) {
    var paddingLeft = parseInt(that.$container.css('padding-left'));
    var left = parseInt(that.$element.css('left'));
    var top = parseInt(that.$element.css('top'));
    if (that.dnd.snap !== undefined) {
      x = Math.round(x / that.dnd.snap) * that.dnd.snap;
      y = Math.round(y / that.dnd.snap) * that.dnd.snap;
    }
    that.updateCoordinates(x, y, left - paddingLeft, top);
  };

  this.dnd.stopMovingCallback = function (event) {
    that.stopMoving(event);
    that.newElement = false;
    that.focus(that.$element);
  };

  H5P.$body.keydown(function (event) {
    if (event.keyCode === 17 && that.dnd.snap !== undefined) {
      delete that.dnd.snap;
    }
  }).keyup(function (event) {
    if (event.keyCode === 17) {
      that.dnd.snap = 10;
    }
  }).click(function () {
    // Remove coordinates picker if we didn't press an element.
    if (that.pressed !== undefined) {
      delete that.pressed;
    }
    else {
      that.blur();
    }
  });
};

/**
 * Attaches the menu bar to the given wrapper.
 *
 * @param {jQuery} $wrapper
 * @returns {undefined}
 */
H5P.DragNBar.prototype.attach = function ($wrapper) {
  var self = this;
  $wrapper.html('');

  var $list = H5P.jQuery('<ul class="h5p-dragnbar-ul"></ul>').appendTo($wrapper);

  for (var i = 0; i < this.buttons.length; i++) {
    var button = this.buttons[i];

    if (i === this.overflowThreshold) {
      $list = H5P.jQuery('<li class="h5p-dragnbar-li"><a href="#" title="' + 'More elements' + '" class="h5p-dragnbar-a h5p-dragnbar-more-button"></a><ul class="h5p-dragnbar-li-ul"></ul></li>')
        .appendTo($list)
        .click(function () {
          return false;
        })
        .hover(function () {
          $list.stop().slideToggle(300);
        }, function () {
          $list.stop().slideToggle(300);
        })
        .children(':first')
        .next();
    }

    this.addButton(button, $list);
  }

  // Add coordinates picker
  this.$coordinates = H5P.jQuery('<div class="h5p-dragnbar-coordinates" style="display:none"><input class="h5p-dragnbar-x" type="text" value="0">, <input class="h5p-dragnbar-y" type="text" value="0"></div>')
    .appendTo(H5P.$body)
    .mousedown(function () {
      self.pressed = true;
    });
  this.$x = this.$coordinates.find('.h5p-dragnbar-x');
  this.$y = this.$coordinates.find('.h5p-dragnbar-y');

  this.$x.add(this.$y).on('change keydown', function(event) {
    if (event.type === 'change' || event.which === 13) {
      var x = parseInt(self.$x.val());
      var y = parseInt(self.$y.val());
      if (!isNaN(x) && !isNaN(y)) {
        var snap = self.dnd.snap;
        delete self.dnd.snap;
        self.dnd.stopMovingCallback({
          pageX: x + self.dnd.adjust.x + self.dnd.containerOffset.left + self.dnd.scrollLeft + parseInt(self.$container.css('padding-left')),
          pageY: y + self.dnd.adjust.y + self.dnd.containerOffset.top + self.dnd.scrollTop
        });
        self.dnd.snap = snap;
      }
    }
  });
};

/**
 * Add button.
 *
 * @param {type} button
 * @param {type} $list
 * @returns {undefined}
 */
H5P.DragNBar.prototype.addButton = function (button, $list) {
  var that = this;

  H5P.jQuery('<li class="h5p-dragnbar-li"><a href="#" title="' + button.title + '" class="h5p-dragnbar-a h5p-dragnbar-' + button.id + '-button"></a></li>').appendTo($list).children().click(function () {
    return false;
  }).mousedown(function (event) {
    if (event.which !== 1) {
      return;
    }

    that.newElement = true;
    that.pressed = true;
    var $element = button.createElement().appendTo(that.$container);
    that.focus($element);
    that.dnd.press($element, event.pageX, event.pageY);
  });
};

/**
 * Change container.
 *
 * @param {jQuery} $container
 * @returns {undefined}
 */
H5P.DragNBar.prototype.setContainer = function ($container) {
  this.$container = $container;
  this.dnd.$container = $container;
};

/**
 * Handler for when the dragging stops. Makes sure the element is inside its container.
 *
 * @param {Object} event
 * @returns {undefined}
 */
H5P.DragNBar.prototype.stopMoving = function (event) {
  var x, y, top, left;

  if (this.newElement) {
    x = event.pageX - 10;
    y = event.pageY - 10;
  }
  else {
    x = event.pageX - this.dnd.adjust.x;
    y = event.pageY - this.dnd.adjust.y;
  }

  var offset = this.$container.offset();

  // Check if element is above or below the container.
  var containerHeight = this.$container.height();
  var elementHeight = this.dnd.$element.outerHeight() + 3;
  if (y < offset.top) {
    top = 0;
  }
  else if (y + elementHeight > offset.top + containerHeight) {
    top = containerHeight - elementHeight;
  }
  else {
    top = y - offset.top;
  }

  // Check if element is to the left or to the right of the container.
  var paddingLeft = parseInt(this.$container.css('padding-left'));
  var containerWidth = this.$container.width() + paddingLeft;
  var elementWidth = this.dnd.$element.outerWidth() + 2;

  if (x < offset.left + paddingLeft) {
    left = paddingLeft;
  }
  else if (x + elementWidth > offset.left + containerWidth) {
    left = containerWidth - elementWidth;
  }
  else {
    left = x - offset.left;
  }

  if (this.dnd.snap !== undefined) {
    left = Math.round(left / this.dnd.snap) * this.dnd.snap;
    top = Math.round(top / this.dnd.snap) * this.dnd.snap;
  }

  // Calculate percentage
  top = top / (containerHeight / 100);
  left = left / (containerWidth / 100);

  this.dnd.$element.css({top: top + '%', left: left + '%'});

  // Give others the result
  if (this.stopMovingCallback !== undefined) {
    paddingLeft = paddingLeft / (containerWidth / 100);
    this.stopMovingCallback(left - paddingLeft, top);
  }
};

/**
 * Makes it possible to focus and move the element around.
 * Must be inside $container.
 *
 * @param {jQuery} $element
 * @returns {undefined}
 */
H5P.DragNBar.prototype.add = function ($element) {
  var self = this;

  if ($element.attr('tabindex') === undefined) {
    // Make it possible to tab between elements.
    $element.attr('tabindex', 1);
  }

  $element.mousedown(function (event) {
    if (event.which !== 1) {
      return;
    }

    self.pressed = true;
    self.focus($element);
    if (event.result !== false) { // Moving can be stopped if the mousedown is doing something else
      self.dnd.press($element, event.pageX, event.pageY);
    }
  }).focus(function () {
    self.focus($element);
  });

  // TODO: Should the form dialog be added to this library? Seems like there's lot of similarities between CP, IV and DQ.
  // TODO: It would also be great if we could get resize in here.
};

/**
 * Select the given element in the UI.
 *
 * @param {jQuery} $element
 * @returns {undefined}
 */
H5P.DragNBar.prototype.focus = function ($element) {
  var self = this;

  // Keep track of the element we have in focus
  self.$element = $element;

  // Show and update coordinates picker
  self.$coordinates.show();
  var offset = $element.offset();
  var position = $element.position();
  self.updateCoordinates(offset.left, offset.top, position.left, position.top);
};

/**
 * Deselect any elements in the UI.
 *
 * @returns {undefined}
 */
H5P.DragNBar.prototype.blur = function () {
  var self = this;

  self.$coordinates.hide();
};


/**
 * Update the coordinates picker.
 *
 * @param {Number} left
 * @param {Number} top
 * @param {Number} x
 * @param {Number} y
 * @returns {undefined}
 */
H5P.DragNBar.prototype.updateCoordinates = function (left, top, x, y) {
  var self = this;

  // Move it
  self.$coordinates.css({
    left: left,
    top: top
  });

  // Set pos
  self.$x.val(Math.round(x));
  self.$y.val(Math.round(y));
};
