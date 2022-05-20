H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.CoreMenu = (function ($, JoubelUI) {

  function CoreMenu(IP, IPEditor) {

    /**
     * Core button bar element
     */
    var $coreButtonBar = $('<div>', {
      'class': 'h5p-buttonbar-sub-menu show'
    });

    /**
     * Button for opening the button bar
     */
    var $button;

    var coreTitle = H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'coreMenu', {});

    /**
     * Create button for adding step at current position
     */
    JoubelUI.createButton({
      'class': 'h5p-bottom-button',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'add', {})
    }).click(function () {
      addStep();
      IP.refocusView();
      return false;
    }).appendTo($coreButtonBar);

    /**
     * Button for removing currently editing step
     */
    JoubelUI.createButton({
      'class': 'h5p-bottom-button',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'remove', {})
    }).click(function () {

      // Remove editing step
      IPEditor.removeStep();
      IP.refocusView();

      return false;
    }).appendTo($coreButtonBar);

    /**
     * Add new step at active step position and go to new step.
     *
     * @param [step]
     */
    var addStep = function (step) {
      step = step || IP.getStep(IPEditor.getUniqueId(IP.$jmpress.jmpress('active')));

      var $activeStep = step.getElement();
      var activeStepParams = step.getParams();

      // Initialize new step at the position of active step
      var newStepParams = $.extend(true, {}, IPEditor.defaults);
      // Extend positions
      $.extend(true, newStepParams.positioning, activeStepParams.positioning);

      // Reset rotation, force textual input for rotation since UX for rotation is hard
      newStepParams.positioning.rotateX = 0;
      newStepParams.positioning.rotateY = 0;
      newStepParams.positioning.rotateZ = 0;

      // Create step, example content and activate it
      var newStep = IP.createStep(newStepParams, {addToParams: true, insertAfter: $activeStep})
        .createExampleContent(IPEditor.field.fields[0].field.fields[0].options)
        .activateStep(IP.$jmpress);

      var newStepId = newStep.getId();
      newStep.setName(H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'step', {}) + ' ' + newStepId);

      // Redraw semantics
      IPEditor.createLibrarySemantics(newStep)
        .createBackgroundSemantics(newStep);

      // Set step as current
      IP.updateRoute()
        .goToStepId(newStepId);

      IPEditor.updateActiveStepDisplay(newStep.getName());
      IPEditor.setEditingStep(newStep);
    };

    this.createButton = function (clickCallback) {
      $button = JoubelUI.createButton({
        'class': 'h5p-main-menu-button h5p-core-menu-button active',
        'title': coreTitle
      }).click(function () {
        if (clickCallback) {
          clickCallback();
        }
        $button.addClass('active');
        $coreButtonBar.addClass('show');
        IPEditor.IP.refocusView();
      });

      return $button;
    };

    /**
     * Append core menu to element
     *
     * @param {jQuery} $wrapper
     */
    this.appendTo = function ($wrapper) {
      $coreButtonBar.appendTo($wrapper);
    };

    /**
     * Hide button bar
     */
    this.hide = function () {
      $button.removeClass('active');
      $coreButtonBar.removeClass('show');
    };

    /**
     * Get core menu element
     *
     * @returns {jQuery}
     */
    this.getElement = function () {
      return $coreButtonBar;
    }
  }



  return CoreMenu;
})(H5P.jQuery, H5P.JoubelUI);
