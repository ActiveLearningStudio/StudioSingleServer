/** @namespace H5PEditor */
var H5PEditor = H5PEditor || {};

H5PEditor.HierarchicList = (function ($) {

  /**
   * Draws the list.
   *
   * @class
   * @param {List} list
   */
  function HierarchicList(list) {
    var self = this;
    var entity = list.getEntity();
    var items = [];

    // Make first letter upper case.
    entity = entity.substr(0,1).toUpperCase() + entity.substr(1);

    // Create DOM elements
    var $wrapper = $('<div/>' , {
      'class': 'h5p-hierarchic-list-wrapper'
    });
    var $list = $('<ol/>', {
      'class': 'h5p-hierarchic-list'
    }).appendTo($wrapper);
    var $button = $('<button/>', {
      text: H5PEditor.t('core', 'addEntity', {':entity': entity}),
      on: {
        click: function () {
          if (list.addItem()) {
            openItem($list.children(':last'));
          }
        }
      }
    }).appendTo($wrapper);

    // Used when dragging items around
    var adjustX, adjustY, marginTop, formOffset, $currentItem;

    /**
     * @private
     * @param {jQuery} $item
     * @param {jQuery} $placeholder
     * @param {Number} x
     * @param {Number} y
     */
    var moveItem = function ($item, $placeholder, x, y) {
      var currentIndex;

      // Adjust so the mouse is placed on top of the icon.
      x = x - adjustX;
      y = y - adjustY;
      $item.css({
        top: y - marginTop - formOffset.top,
        left: x - formOffset.left
      });

      // Try to move up.
      var $prev = $item.prev().prev();
      if ($prev.length && y < $prev.offset().top + ($prev.height() / 2)) {
        $prev.insertAfter($item);

        currentIndex = $item.index();
        list.moveItem(currentIndex, currentIndex - 1);

        return;
      }

      // Try to move down.
      var $next = $item.next();
      if ($next.length && y + $item.height() > $next.offset().top + ($next.height() / 2)) {
        $next.insertBefore($placeholder);

        currentIndex = $item.index();
        list.moveItem(currentIndex, currentIndex + 1);
      }
    };

    /**
     * Re-index labels. Necessary after items are sorted or removed.
     *
     * @private
     */
    var reindexLabels = function () {
      $list.find('.h5p-index-label').each(function (index, element) {
        $(element).text(index + 1);
      });
    };

    /**
     * Opens the given item.
     *
     * @private
     * @param {jQuery} $newItem
     */
    var openItem = function ($newItem) {
      if ($currentItem !== undefined) {
        $currentItem.removeClass('h5p-current');
        // TODO: Destroy form here
      }
      $newItem.addClass('h5p-current');
      $currentItem = $newItem;
      // Create form wrapper
      var $form = $('<fieldset/>', {
        'class': 'h5p-hierarchical-form'
      });

      // Append new field item to forms wrapper
      item.appendTo($form);
      
      // Good UX: automatically expand groups
      if (item instanceof H5PEditor.Group) {
        item.expand();
      }
      else if (item instanceof H5PEditor.Library) {
        // Use selected library as title
        item.changes.push(function (library) {
          $item.find('.h5p-label').text(library.title);
        });
        if (item.currentLibrary) {
          for (var i = 0; i < item.libraries.length; i++) {
            //console.log(item.libraries[i].uberName, item.currentLibrary);
            if (item.libraries[i].uberName === item.currentLibrary) {
              $item.find('.h5p-label').text(item.libraries[i].title);
              break;
            }
          }
        }
      }
      else if (item instanceof H5PEditor.Select) {
        // Use selected value as title
        var change = function () {
          var value = item.$select.val();
          $item.find('.h5p-label').text(value === '-' ?  entity : item.$select.children('option[value="' + value + '"]').text());
        };
        item.$select.change(change);
        change();
      }
    };

    /**
     * Implements addItem defined by H5PEditor.List
     * 
     * Adds UI items to the widget.
     *
     * @public
     * @param {Object} item
     *  Item from content.json
     */
    self.addItem = function (item) {
      items.push(item);
      var $placeholder;
      var $item = $('<li/>', {
        'class': 'h5p-hierarchical-item'
      }).appendTo($list);

      /**
       * Mouse move callback
       *
       * @private
       * @param {Object} event
       */
      var move = function (event) {
        moveItem($item, $placeholder, event.pageX, event.pageY);
      };

      /**
       * Mouse button release callback
       *
       * @private
       */
      var up = function () {
        H5P.$body
          .unbind('mousemove', move)
          .unbind('mouseup', up)
          .unbind('mouseleave', up)
          .attr('unselectable', 'off')
          .css({
            '-moz-user-select': '',
            '-webkit-user-select': '',
            'user-select': '',
            '-ms-user-select': ''
          })
          [0].onselectstart = H5P.$body[0].ondragstart = null;

        $list.removeClass('h5p-moving').css({
          width: 'auto',
          height: 'auto',
          top: '',
          left: ''
        });
        $placeholder.remove();
        reindexLabels();
      };

      /**
       * Mouse button down callback
       *
       * @private
       */
      var down = function () {
        if (event.which !== 1) {
          return; // Only allow left mouse button
        }

        // Start tracking mouse
        H5P.$body
          .attr('unselectable', 'on')
          .mouseup(up)
          .bind('mouseleave', up)
          .css({
            '-moz-user-select': 'none',
            '-webkit-user-select': 'none',
            'user-select': 'none',
            '-ms-user-select': 'none'
          })
          .mousemove(move)
          [0].onselectstart = H5P.$body[0].ondragstart = function () {
            return false;
          };

        var offset = $list.offset();
        adjustX = event.pageX - offset.left;
        adjustY = event.pageY - offset.top;
        marginTop = parseInt($list.css('marginTop'));
        formOffset = $list.offsetParent().offset();
        // TODO: Couldn't formOffset and margin be added?

        var width = $item.width();
        var height = $item.height();

        $item.addClass('h5p-moving').css({
          width: width,
          height: height
        });
        $placeholder = $('<li/>', {
          'class': 'h5p-placeholder',
          css: {
            width: width,
            height: height
          }
        }).insertBefore($item);

        move(event);
        return false;
      };

      // Add order button
      $('<div/>', {
        'class' : 'h5p-order',
        role: 'button',
        tabIndex: 1,
        on: {
          mousedown: down
        }
      }).appendTo($item);

      // Add clickable label
      $('<div/>', {
        'class' : 'h5p-hierarchical-a',
        html: '<span class="h5p-index-label">' + ($item.index() + 1) + '</span>. <span class="h5p-label">' + entity + '</span>',
        role: 'button',
        tabIndex: 1,
        on: {
          click: function () {
            openItem($item.add($form));
          }
        }
      }).appendTo($item);

      // Append remove button
      $('<div/>', {
        'class' : 'h5p-remove',
        role: 'button',
        tabIndex: 1,
        on: {
          click: function () {
            if (confirm(H5PEditor.t('core', 'confirmRemoval', {':type': entity}))) {
              var $next, index = $item.index();
              if (index) {
                // Go to previous item
                $next = $item.prev().add($form.prev());
              }
              else {
                // Go to next item
                $next = $item.next().add($form.next());
              }

              if ($next.length) {
                // Open another item
                openTab($next);
              }

              list.removeItem($item.index());
              $item.remove();
              $form.remove();
              reindexLabels();
            }
          }
        }
      }).prependTo($form);

      if ($currentItem === undefined) {
        // Open item if there are none open
        openItem($item.add($form));
      }
    };

    /**
     * Puts this widget at the end of the given container.
     *
     * @public
     * @param {jQuery} $container
     */
    self.appendTo = function ($container) {
      $wrapper.appendTo($container);
    };

    /**
     * Remove this widget from the editor DOM.
     *
     * @public
     */
    self.remove = function () {
      $wrapper.remove();
    };
  }

  return HierarchicList;
})(H5P.jQuery);
