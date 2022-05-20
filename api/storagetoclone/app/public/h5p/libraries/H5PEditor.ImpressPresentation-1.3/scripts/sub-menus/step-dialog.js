H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.StepDialog = function ($, JoubelUI) {

  function StepDialog() {

    /**
     * Step dialog wrapper
     *
     * @type {jQuery}
     */
    var $stepDialog = $('<div>', {
      'class': 'impress-presentation-step-dialog'
    });

    /**
     * Step dialog content
     */
    var $stepContent = $('<div>', {
      'class': 'h5p-step-dialog-content'
    }).appendTo($stepDialog);

    /**
     * Step dialog footer containing buttons
     */
    var $stepDialogFooter = $('<div>', {
      'class': 'h5p-step-dialog-footer'
    }).appendTo($stepDialog);

    /**
     * Done button
     */
    var $stepDialogButton = JoubelUI.createButton({
      'class': 'h5p-step-dialog-done',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'done', {})
    }).appendTo($stepDialogFooter);

    /**
     * Append step dialog to wrapper
     *
     * @param {jQuery} $wrapper
     * @returns {H5PEditor.ImpressPresentationEditor.StepDialog}
     */
    this.appendTo = function ($wrapper) {
      $stepDialog.appendTo($wrapper);

      return this;
    };

    /**
     * Append element to step dialog
     *
     * @param {jQuery} $element
     * @returns {H5PEditor.ImpressPresentationEditor.StepDialog}
     */
    this.append = function ($element) {
      $stepContent.append($element);

      return this;
    };

    /**
     * Set button action
     *
     * @param {function} callback
     */
    this.setDialogDoneCallback = function (callback) {
      $stepDialogButton.unbind('click')
        .click(callback);
    };

    /**
     * Show step dialog
     *
     * @returns {H5PEditor.ImpressPresentationEditor.StepDialog}
     */
    this.show = function () {
      $stepDialog.addClass('show');

      return this;
    };

    /**
     * Hide step dialog
     *
     * @returns {H5PEditor.ImpressPresentationEditor.StepDialog}
     */
    this.hide = function () {
      $stepDialog.removeClass('show');

      return this;
    };
  }

  return StepDialog;

}(H5P.jQuery, H5P.JoubelUI);
