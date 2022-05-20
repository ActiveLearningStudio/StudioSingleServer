H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.EditingStep = (function ($, JoubelUI) {

  function EditingStep(IPEditor) {
    var self = this;

    var editingStep;

    // Container
    var $selectorContainer = $('<div>', {
      'class': 'h5p-select-container'
    });

    // Create step selector
    var $stepSelector = $('<select>', {
      'class': 'h5p-step-selector'
    }).change(function () {
      var step = IPEditor.IP.getStep(parseInt($(this).val()));
      self.updateEditingStep(step);
      IPEditor.IP.refocusView();
    });

    // Title
    $('<div>', {
      'class': 'h5p-select-title',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'editingStep', {})
    }).appendTo($selectorContainer);

    // Add selector
    $stepSelector.appendTo($selectorContainer);

    /**
     * Go to selected slide button
     */
    var goToTitle = H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'goTo', {});
    JoubelUI.createButton({
      'class': 'h5p-select-go-to',
      'title': goToTitle
    }).click(function () {
      IPEditor.IP.$jmpress.jmpress('goTo', '#' + H5P.ImpressPresentation.ID_PREFIX + IPEditor.editingStepId);
      IPEditor.IP.refocusView();
    }).appendTo($selectorContainer);

    var getOption = function (step) {
      return $stepSelector.find('option[value=' + step.getId() + ']');
    };

    /**
     * Update editing step
     *
     * @param step Selected editing step
     * @returns {H5PEditor.ImpressPresentationEditor.EditingStep}
     */
    this.updateEditingStep = function (step) {
      var stepId = step.getId();
      $stepSelector.val(stepId);
      IPEditor.editingStepId = stepId;

      // Remove old, add new style
      if (editingStep) {
        editingStep.setEditing(false);
      }
      editingStep = step;
      step.setEditing(true);

      // Update route
      IPEditor.orderingMenu.updateRouteCheckbox(step);

      // Update numeric step input
      IPEditor.numericStepInput.setStep(step);

      // Update preview list visuals
      IPEditor.stepPreviewList.setEditingStep(step);

      return this;
    };

    this.appendTo = function ($wrapper) {
      $selectorContainer.appendTo($wrapper);
    };

    this.addStepOption = function ($option) {
      $stepSelector.append($option);
    };

    this.removeStep = function (step) {
      getOption(step).remove();

      // Make sure we update step selector, in case we deleted current step
      $stepSelector.change();
    };

    this.updateStepName = function (step) {
      getOption(step).text(step.getName());
    };
  }

  return EditingStep;
})(H5P.jQuery, H5P.JoubelUI);
