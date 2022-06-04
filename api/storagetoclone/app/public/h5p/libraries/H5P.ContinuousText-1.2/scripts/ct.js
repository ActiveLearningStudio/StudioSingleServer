var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {object} params Options for this library.
 * @param {number} id
 * @param {object} contentData
 */
H5P.ContinuousText = function (params, id, contentData) {
  this.text = params.text === undefined ? '<div class="ct"><em>New text</em></div>' : '<div class="ct">'+params.text+'</div>';
  this.contentData = contentData;
};

/**
 * Wipe out the content of the wrapper and put our HTML in it.
 *
 * @param {jQuery} $wrapper
 */
H5P.ContinuousText.prototype.attach = function ($wrapper) {
  $wrapper.addClass('h5p-ct').html(this.text);
  this.handleXAPI();
};

/**
 * trigger XAPI based on activity if activity is CP then trigger after slide consumed else trigger on attach
 */
H5P.ContinuousText.prototype.handleXAPI = function () {
  // for CP trigger only on slide open for others trigger on attach
  if (this.contentData.hasOwnProperty("parent") && this.contentData.parent.hasOwnProperty("presentation")) {
    this.on('trigger-consumed', function () {
      this.triggerConsumed();
    });
  } else {
    this.triggerConsumed();
  }
};


H5P.ContinuousText.prototype.triggerConsumed = function () {
  var title = this.contentData.hasOwnProperty("metadata") && this.contentData.metadata.hasOwnProperty("title") ? this.contentData.metadata.title : "Continuous Text";
  var xAPIEvent = this.createXAPIEventTemplate({
    id: 'http://activitystrea.ms/schema/1.0/consume',
    display: {
      'en-US': 'consumed'
    }
  }, {
    result: {
      completion: true
    }
  });

  Object.assign(xAPIEvent.data.statement.object.definition, {
    name:{
      'en-US': title
    }
  });

  this.trigger(xAPIEvent);
};

H5P.ContinuousText.Engine = (function() {

  // Fit nodes from $document into $target while preventing $target from
  // overflowing $container.  Will call itself recursively to add child nodes
  // if the parent node does not fit.
  function fitText($container, $target, $document) {
    var containerBottom = $container.offset().top + $container.innerHeight();
    $document.contents().each(function () {
      var thisBottom, $node, $clone, words,
      i = 0,
      text = "",
      rest = "";

      // Proper DOM node. Attempt to fit.
      if (this.nodeType === 1) {
        $node = H5P.jQuery(this);
        $target.append($node); // Need to append it here to get height calculated by browser.
        thisBottom = $node.offset().top + $node.outerHeight();
        if (thisBottom > containerBottom) {
          // Pull back to the document.
          $clone = $node.clone();
          $document.prepend($clone);
          $node.empty();
          fitText($container, $node, $clone);
          return false;
        }
      } else if (this.nodeType === 3) {
        // Text node. Might need to split.
        $target.append(this);
        // Test if $target overflows.
        thisBottom = $target.offset().top + $target.outerHeight();
        if (thisBottom > containerBottom) {
          words = this.data.split(' ');
          do {
            i++;
            text = words.slice(0, i).join(" ");
            rest = words.slice(i).join(" ");
            this.replaceData(0, this.data.length, text);
            thisBottom = $target.offset().top + $target.outerHeight();
          } while (thisBottom < containerBottom && i < words.length);
          // Need to backtrack one word.
          text = words.slice(0, i-1).join(" ");
          rest = words.slice(i-1).join(" ");
          this.replaceData(0, this.data.length, text);
          $document.prepend(rest);

          return false;
        }
      } else {
        // Ignore. Probably a comment.
      }
    });
  }

  return {
    run: function (cpEditor) {
      var elements = cpEditor.getCTs();

      // Do not run if there are no CT-elements
      if (!elements.length) {
        return;
      }

      var content = cpEditor.params.ct;
      var $temporaryDocument = H5P.jQuery('<div/>').html(content);

      var opacity = (cpEditor.ct.params.backgroundOpacity === undefined || cpEditor.ct.params.backgroundOpacity === 0 ? null : cpEditor.ct.params.backgroundOpacity);

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        var $container = element.element.$wrapper;

        // Update element visuals
        if (opacity) {
          $container.removeClass('h5p-transparent').css('backgroundColor', 'rgba(255, 255, 255, ' + (opacity / 100) + ')');
        }
        else {
          $container.addClass('h5p-transparent').css('backgroundColor', '');
        }
        element.params.backgroundOpacity = opacity;

        var $elementClone = $container.clone();
        var $innerContainer = $elementClone.find('.ct');

        $elementClone.appendTo(cpEditor.cp.$current);

        // Remaining blocks in the temporary document.
        var $blocks = $temporaryDocument.children();
        if ($blocks.length === 0) {
          $container.addClass('no-more-content');
          $container.find('.ct').html('<em>No more content</em>');
          element.params.action.params.text = '';
        }
        else {
          $innerContainer.html('');
          fitText($elementClone, $innerContainer, $temporaryDocument);

          // Store data on element
          element.params.action.params.text = $innerContainer.html();
          $container.find('.ct').html(element.params.action.params.text);
        }

        // Cleanup
        $elementClone.remove();
      }

      // Cleanup Temporary document.
      $temporaryDocument.remove();
    }
  };
})();
