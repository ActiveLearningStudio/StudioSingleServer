H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.StepPreviewList = function ($, EventDispatcher) {

  /**
   *
   * @param [initHidden]
   * @constructor
   */
  function StepPreviewList(initHidden) {

    var self = this;

    EventDispatcher.call(this);

    // Determine if list should be opened on init
    var hideString = initHidden ? ' hidden' : '';

    // Current active step
    var activeStep;

    // Current editing step
    var editingStep;

    var $stepPreviewList = $('<div>', {
      'class': 'h5p-impress-step-preview-list' + hideString
    });

    var toggleList = function () {
      $stepPreviewList.toggleClass('hidden');
    };

    $('<div>', {
      'class': 'h5p-impress-step-preview-list-toggle',
      'role': 'button',
      'tabindex': 0,
      html: '<i class="fa fa-angle-double-left"></i>',
      appendTo: $stepPreviewList
    }).click(function () {
      toggleList();
    });

    var $listContent = $('<div>', {
      'class': 'h5p-impress-step-preview-list-content',
      appendTo: $stepPreviewList
    });

    $('<div>', {
      'class': 'h5p-impress-step-preview-list-title',
      html: H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'preview'),
      appendTo: $listContent
    });

    var $cloneList = $('<div>', {
      'class': 'h5p-impress-step-preview-clones',
      appendTo: $listContent
    });

    var clones = [];

    var resizeDynamically = false;

    var maxFontSize = 11;

    var updateStep = function (clone) {
      var $cloneWrapper = clone.$element.parent();
      $cloneWrapper.children().remove();
      var $newElement = clone.step.getElement().clone();
      $newElement
        .addClass('h5p-impress-step-preview-step-clone')
        .appendTo($cloneWrapper);

      clone.$element = $newElement;

      resizeClone($newElement);
    };

    /**
     * Add step to preview list
     *
     * @param {H5P.ImpressPresentation.Step} step
     */
    this.addStep = function (step) {
      var clone = getClone(step);

      // If step exists update it
      if (clone) {
        updateStep(clone);
        return;
      }

      var $cloneWrapper = $('<div>', {
        'class': 'h5p-impress-step-preview-clone-wrapper',
        'title': step.getName()
      }).click(function () {
        self.trigger('selectedStep', step)
      });

      // Append clone
      var $clone = step.getElement()
        .clone()
        .css('border', '') // Strip editing border
        .addClass('h5p-impress-step-preview-step-clone')
        .appendTo($cloneWrapper);

      clones.push({step:step, $element: $clone, $wrapper: $cloneWrapper});

      $cloneWrapper.appendTo($cloneList);

      resizeClone($clone);
    };

    this.removeStep = function (step) {
      var clone = getClone(step);

      if (clone) {
        clone.$wrapper.remove();
        var index = clones.indexOf(clone);
        if (index > -1) {
          clones.splice(index, 1);
        }
      }
    };

    var getClone = function (step) {
      var existingIndex = clones.map(function (e) {return e.step}).indexOf(step);
      if (existingIndex > -1) {
        return clones[existingIndex];
      }

      return null;
    };

    this.updateTitle = function (step) {
      var clone = getClone(step);

      if (clone) {
        clone.$wrapper.attr('title', step.getName());
      }
    };

    this.toggleDynamicResizing = function () {
      resizeDynamically = !resizeDynamically;
    };

    /**
     * Set active step visually in preview list.
     *
     * @param step
     */
    this.setActiveStep = function (step) {
      if (activeStep) {
        activeStep.$wrapper.removeClass('active-step');
      }
      activeStep = getClone(step);
      activeStep.$wrapper.addClass('active-step');
    };

    /**
     * Set editing step visually in preview list.
     *
     * @param step
     */
    this.setEditingStep = function (step) {
      if (editingStep) {
        editingStep.$wrapper.removeClass('editing-step');
      }
      editingStep = getClone(step);
      editingStep.$wrapper.addClass('editing-step');
    };

    /**
     *
     * @param $clone
     * @param [skipResizeCheck]
     */
    var resizeClone = function ($clone, skipResizeCheck) {
      if (!skipResizeCheck && !resizeDynamically) {
        return;
      }

      var $cloneWrapper = $clone.parent();

      // Scale down clone
      var cloneRatio = $clone.width() / $clone.height();
      var wrapperRatio = $cloneWrapper.width() / $cloneWrapper.height();

      // Stretch clone to fit height
      var height = $cloneWrapper.height();
      var width = $cloneWrapper.height() * cloneRatio;

      // Stretch to width
      if (cloneRatio > wrapperRatio) {
        width = $cloneWrapper.width();
        height = $cloneWrapper.width() / cloneRatio;
      }

      var currentFontSize = parseFloat($clone.css('font-size'));
      var heightDiff = (height / $clone.height()) * currentFontSize;
      var widthDiff = (width / $clone.width()) * currentFontSize;
      var chosenDiff = heightDiff < widthDiff ? heightDiff : widthDiff;
      var fontSize = chosenDiff < maxFontSize ? chosenDiff : maxFontSize;

      $clone.width(width).height(height)
        .css({
          'transform': 'translateX(-50%, -50%)',
          '-webkit-transform': 'translate(-50%, -50%)',
          'transform-style': 'initial',
          'font-size': fontSize
        });
    };

    this.resize = function () {
      clones.forEach(function (clone) {
        resizeClone(clone.$element, true);
      });

      return this;
    };

    this.appendTo = function ($wrapper) {
      $stepPreviewList.appendTo($wrapper);

      return this;
    }
  }

  // Inherit support for events
  StepPreviewList.prototype = Object.create(EventDispatcher.prototype);
  StepPreviewList.prototype.constructor = StepPreviewList;

  return StepPreviewList;

}(H5P.jQuery, H5P.EventDispatcher);
