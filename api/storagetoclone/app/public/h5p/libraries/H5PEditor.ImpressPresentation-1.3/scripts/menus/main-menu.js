H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.MainMenu = (function ($, JoubelUI, NavigationMenu, SubMenuSelector) {

  function MainMenu(IPEditor) {

    var $buttonBar = $('<div>', {
      'class': 'impress-presentation-buttonbar'
    });

    var $topRow = $('<div>', {
      'class': 'h5p-buttonbar-top-row'
    }).appendTo($buttonBar);

    var $bottomRow = $('<div>', {
      'class': 'h5p-buttonbar-bottom-row'
    }).appendTo($buttonBar);

    IPEditor.coreMenu.appendTo($bottomRow);
    IPEditor.transformMenu.appendTo($bottomRow);
    IPEditor.orderingMenu.appendTo($bottomRow);

    // Create selector for selecting which step we are on.
    new NavigationMenu(IPEditor)
      .appendTo($topRow);

    new SubMenuSelector(IPEditor)
      .appendTo($topRow);

    /**
     * Append main menu to given element
     * @param {jQuery} $wrapper
     */
    this.appendTo = function ($wrapper) {
      $buttonBar.appendTo($wrapper);
    };
  }

  return MainMenu;
})(H5P.jQuery,
  H5P.JoubelUI,
  H5PEditor.ImpressPresentationEditor.NavigationMenu,
  H5PEditor.ImpressPresentationEditor.SubMenuSelector
);
