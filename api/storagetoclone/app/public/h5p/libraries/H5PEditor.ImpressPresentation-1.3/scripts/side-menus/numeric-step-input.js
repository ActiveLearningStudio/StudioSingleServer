H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.NumericStepInput = function ($, EventDispatcher) {

  /**
   * Numerical input for step configuration
   *
   * @constructor
   */
  function NumericStepInput() {
    EventDispatcher.call(this);

    var self = this;

    var stepParams;

    var $numericStepInput = $('<div>', {
      'class': 'h5p-impress-numeric-step-input hidden'
    });

    var toggleList = function () {
      $numericStepInput.toggleClass('hidden');
    };

    $('<div>', {
      'class': 'h5p-impress-numeric-step-input-toggle',
      'role': 'button',
      'tabindex': 0,
      html: '<i class="fa fa-angle-double-left"></i>',
      appendTo: $numericStepInput
    }).click(function () {
      toggleList();
    });

    var $listContent = $('<div>', {
      'class': 'h5p-impress-numeric-step-input-content',
      appendTo: $numericStepInput
    });

    $('<div>', {
      'class': 'h5p-impress-numeric-step-input-title',
      html: H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'stepConfiguration'),
      appendTo: $listContent
    });

    var $inputFields = $('<div>', {
      'class': 'h5p-impress-numeric-step-input-fields',
      appendTo: $listContent
    });

    var positionInputs = [];

    var inputChanged = function (prop, value) {
      self.trigger('inputChanged', {property: prop, value: value});
    };

    var createPositionInput = function (labelVar, paramName) {

      var $label = $('<label>', {
        'class': 'h5p-impress-numeric-step-input-fields-position',
        'text': H5PEditor.t('H5PEditor.ImpressPresentationEditor', labelVar),
        appendTo: $inputFields
      });

      var $input = $('<input>', {
        'type': 'number',
        'step': 100,
        appendTo: $label
      });

      $input.on('change keyup', function () {
        inputChanged(paramName, $input.val());
      });

      positionInputs.push({label: labelVar, paramName: paramName, input: $input});
    };

    createPositionInput('xLabel', 'x');
    createPositionInput('yLabel', 'y');
    createPositionInput('zLabel', 'z');

    var rotationInput = [];

    var createRotationInput = function (labelVar, paramName) {
      var $rotLabel = $('<label>', {
        'class': 'h5p-impress-numeric-step-input-fields-rotation',
        'text': H5PEditor.t('H5PEditor.ImpressPresentationEditor', labelVar),
        appendTo: $inputFields
      });

      var maxValue = 180;
      var minValue = -180;

      var $number = $('<input>', {
        'type': 'number',
        'min': minValue,
        'max': maxValue,
        'step': 5,
        appendTo: $rotLabel
      });

      var $slider = $('<input>', {
        'type': 'range',
        'min': minValue,
        'max': maxValue,
        'step': 1,
        appendTo: $rotLabel
      });

      // Sync number and slider
      $number.bind('change keyup', function () {
        var newValue = $number.val();

        // Enforce min/max value, since markup doesn't take care of this
        if (newValue > maxValue) {
          newValue = maxValue;
          $number.val(maxValue);
        }
        else if (newValue < minValue) {
          newValue = minValue;
          $number.val(minValue);
        }

        $slider.val(newValue);
        stepParams[paramName] = newValue;
        inputChanged(paramName, newValue);
      });

      $slider.bind('change', function () {
        var newValue = $slider.val();
        $number.val(newValue);
        stepParams[paramName] = newValue;
        inputChanged(paramName, newValue);
      });

      rotationInput.push({label: labelVar, paramName: paramName, number: $number, slider: $slider});
    };

    createRotationInput('xRotLabel', 'rotateX');
    createRotationInput('yRotLabel', 'rotateY');
    createRotationInput('zRotLabel', 'rotateZ');

    /**
     * Update numerical inputs.
     *
     * @param [step] Optional new step
     */
    this.setStep = function (step) {

      if (step) {
        stepParams = step.getParams();
      }

      // Update parameters
      positionInputs.forEach(function (entry) {
        entry.input.val(stepParams.positioning[entry.paramName]);
      });

      rotationInput.forEach(function (entry) {
        var value = stepParams.positioning[entry.paramName];
        entry.number.val(value);
        entry.slider.val(value);
      })
    };

    this.appendTo = function ($wrapper) {
      $numericStepInput.appendTo($wrapper);

      return this;
    }
  }

  // Inherit support for events
  NumericStepInput.prototype = Object.create(EventDispatcher.prototype);
  NumericStepInput.prototype.constructor = NumericStepInput;

  return NumericStepInput;

}(H5P.jQuery, H5P.EventDispatcher);
