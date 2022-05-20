H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.ActiveStep = (function ($, JoubelUI) {

  function ActiveStep(IPEditor) {

    // Wrapper
    var $activeStepDisplayWrapper = $('<div>', {
      'class': 'h5p-active-step-wrapper'
    });

    /**
     * Go to selected slide button
     */
    var goToTitle = H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'goTo', {});
    JoubelUI.createButton({
      'class': 'h5p-select-go-to',
      'title': goToTitle
    }).click(function () {

      // Set editing step to active step
      IPEditor.setEditingStep();
      IPEditor.refocusView();

    }).appendTo($activeStepDisplayWrapper);

    var $activeStepContent = $('<div>', {
      'class': 'h5p-active-step-content',
      appendTo: $activeStepDisplayWrapper
    });

    // Title
    $('<div>', {
      'class': 'h5p-active-step-title',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'activeStep', {}),
      appendTo: $activeStepContent
    });

    // Display the active step
    var $activeStepDisplay = $('<input>', {
      'class': 'h5p-active-step-display',
      'maxlength': 15,
      appendTo: $activeStepContent
    }).change(function () {
      IPEditor.updateActiveStepDisplay($(this).val());
    });

    // Create overview button
    IPEditor.overviewStep.appendTo($activeStepDisplayWrapper);

    this.setActiveStepDisplay = function (step) {
      var stepName = step.getName();
      $activeStepDisplay.val(stepName);
      IPEditor.stepPreviewList.setActiveStep(step);
    };

    this.appendTo = function ($wrapper) {
      $activeStepDisplayWrapper.appendTo($wrapper);
    }
  }

  return ActiveStep;
})(H5P.jQuery, H5P.JoubelUI);
