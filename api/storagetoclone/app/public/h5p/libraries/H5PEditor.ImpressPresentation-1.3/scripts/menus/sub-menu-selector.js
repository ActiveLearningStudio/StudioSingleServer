H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.SubMenuSelector = (function ($, JoubelUI) {

  function SubMenuSelector(IPEditor) {

    var $subMenuSelector = $('<div>', {
      'class': 'h5p-right-aligned-submenu'
    });

    var currentSubMenu = IPEditor.coreMenu;

    var setActiveSubMenu = function (subMenu) {
      currentSubMenu.hide();
      currentSubMenu = subMenu;
    };

    IPEditor.coreMenu.createButton(function () {
      setActiveSubMenu(IPEditor.coreMenu)
    }).appendTo($subMenuSelector);

    IPEditor.transformMenu.createButton(function () {
      setActiveSubMenu(IPEditor.transformMenu)
    }).appendTo($subMenuSelector);

    IPEditor.orderingMenu.createButton(function () {
      setActiveSubMenu(IPEditor.orderingMenu)
    }).appendTo($subMenuSelector);

    var backgroundTitle = H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'background', {});
    JoubelUI.createButton({
      'class': 'h5p-main-menu-button h5p-background-menu-button',
      'title': backgroundTitle
    }).click(function () {
      editStepBackground();
    }).appendTo($subMenuSelector);

    var editTitle = H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'edit', {});
    JoubelUI.createButton({
      'class': 'h5p-main-menu-button h5p-edit-content-menu-button',
      'title': editTitle
    }).click(function () {
      editStepContent();
    }).appendTo($subMenuSelector);


    /**
     * Edit background of step
     *
     * @param {H5P.ImpressPresentation.Step} [step]
     *    Optional step to edit, defaults to current editing step
     */
    var editStepBackground = function (step) {
      step = step ? step : IPEditor.IP.getStep(IPEditor.getEditingStep());

      // Hide jmpress
      IPEditor.IP.$jmpress.addClass('hide');

      // Show library form and set dialog done callback
      IPEditor.stepDialog.append(step.getBackgroundForm())
        .show()
        .setDialogDoneCallback(function () {
          var valid = true;
          step.children.forEach(function (child) {
            if (!child.validate()) {
              valid = false;
            }
          });

          if (valid) {
            step.setBackground(IPEditor.IP.contentId);
            doneStepBackground(step);
          }
        });
    };

    /**
     * Edit content of step, show form.
     *
     * @param {H5P.ImpressPresentation.Step} [step]
     *    Optional step to edit, defaults to current editing step.
     */
    var editStepContent = function (step) {
      step = step ? step : IPEditor.IP.getStep(IPEditor.getEditingStep());

      // Hide jmpress
      IPEditor.IP.$jmpress.addClass('hide');

      // Show library form and set dialog done callback
      IPEditor.stepDialog.append(step.getLibraryForm())
        .show()
        .setDialogDoneCallback(function () {
          var valid = true;
          step.children.forEach(function (child) {
            if (!child.validate()) {
              valid = false;
            }
          });

          if (valid) {
            if (H5PEditor.Html) {
              H5PEditor.Html.removeWysiwyg();
            }
            step.updateLibrary();
            doneStepContent(step);
          }
        });
    };

    /**
     * Done editing step content, remove form.
     *
     * @param {H5P.ImpressPresentation.Step} [step]
     *    The step that was done.
     */
    var doneStepContent = function (step) {
      step = step ? step : IPEditor.IP.getStep(IPEditor.getEditingStep());

      // Hide library form
      step.getLibraryForm().detach();
      IPEditor.stepDialog.hide();

      // Show jmpress
      IPEditor.IP.$jmpress.removeClass('hide');

      IPEditor.IP.refocusView();
    };

    /**
     * Done editing step background, remove form.
     *
     * @param {H5P.ImpressPresentation.Step} step
     *    The step that was done
     */
    var doneStepBackground = function (step) {
      step = step ? step : IPEditor.IP.getStep(IPEditor.getEditingStep());

      // Hide library form
      step.getBackgroundForm().detach();
      IPEditor.stepDialog.hide();

      // Show jmpress
      IPEditor.IP.$jmpress.removeClass('hide');

      IPEditor.IP.refocusView();
    };

    this.appendTo = function ($wrapper) {
      $subMenuSelector.appendTo($wrapper);
    }
  }

  return SubMenuSelector;
})(H5P.jQuery, H5P.JoubelUI);
