H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.NavigationMenu = (function ($, JoubelUI) {

  function NavigationMenu(IPEditor) {

    var $navigationMenu = $('<div>', {
      'class': 'h5p-left-aligned-main-menu'
    });

    IPEditor.editingStep.appendTo($navigationMenu);
    IPEditor.activeStep.appendTo($navigationMenu);
    IPEditor.modeDisplay.appendTo($navigationMenu);

    this.appendTo = function ($wrapper) {
      $navigationMenu.appendTo($wrapper);
    }
  }

  return NavigationMenu;
})(H5P.jQuery, H5P.JoubelUI);
