H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.TransformMenu = function ($, JoubelUI) {

  function TransformMenu(IPEditor, IP) {

    var $transformButtonBar = $('<div>', {
      'class': 'h5p-buttonbar-sub-menu'
    });

    /**
     * Button for opening the button bar
     */
    var $button;

    var transformTitle = H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'transformMenu', {});

    /**
     * Toggle between button states
     *
     * @param {jQuery} $modeButton Button that will be toggled
     * @param {boolean} enable True if button will be enabled
     */
    var toggleButtonState = function ($modeButton, enable) {
      $moveModeButton.removeClass('active');
      //$rotateModeButton.removeClass('active');
      $transformModeButton.removeClass('active');
      if (enable) {
        $modeButton.addClass('active');
      }
    };

    /**
     * Move mode button
     */
    var $moveModeButton = JoubelUI.createButton({
      'class': 'h5p-bottom-button',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor.TransformMenu', 'moveStep', {})
    }).click(function () {
      var enabled = IPEditor.toggleMode(H5PEditor.ImpressPresentationEditor.MOVE);
      toggleButtonState($(this), enabled);
      IP.refocusView();
    }).appendTo($transformButtonBar);

    /**
     * Rotate mode button
     *
     * Removed for now, was too hard to use, restricted to textual input
     */
/*    var $rotateModeButton = JoubelUI.createButton({
      'class': 'h5p-bottom-button',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor.TransformMenu', 'rotateStep', {})
    }).click(function () {
      var enabled = IPEditor.toggleMode(H5PEditor.ImpressPresentationEditor.ROTATE);
      toggleButtonState($(this), enabled);
      IP.refocusView();
    }).appendTo($transformButtonBar);*/

    /**
     * Transform mode button
     */
    var $transformModeButton = JoubelUI.createButton({
      'class': 'h5p-bottom-button',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor.TransformMenu', 'transformStep', {})
    }).click(function () {
      var enabled = IPEditor.toggleMode(H5PEditor.ImpressPresentationEditor.TRANSFORM);
      toggleButtonState($(this), enabled);
      IP.refocusView();
    }).appendTo($transformButtonBar);

    /**
     * Create button bar
     *
     * @param clickCallback
     * @returns {*}
     */
    this.createButton = function (clickCallback) {
      $button = JoubelUI.createButton({
        'class': 'h5p-main-menu-button h5p-transform-menu-button',
        'title': transformTitle
      }).click(function () {
        if (clickCallback) {
          clickCallback();
        }
        $button.addClass('active');
        $transformButtonBar.addClass('show');
        IPEditor.IP.refocusView();
      });

      return $button;
    };

    /**
     * Append to wrapper
     *
     * @param {jQuery} $wrapper
     */
    this.appendTo = function ($wrapper) {
      $transformButtonBar.appendTo($wrapper);
    };

    /**
     * Hide button bar
     */
    this.hide = function () {
      $button.removeClass('active');
      $transformButtonBar.removeClass('show');
    };

    /**
     * Get transform button bar
     *
     * @returns {jQuery} Transform button bar
     */
    this.getElement = function () {
      return $transformButtonBar;
    };
  }

  return TransformMenu;
}(H5P.jQuery, H5P.JoubelUI);

// Default english translations
H5PEditor.language['H5PEditor.ImpressPresentationEditor.TransformMenu'] = {
  libraryStrings: {
    moveStep: 'Move step',
    rotateStep: 'Rotate step',
    transformStep: 'Transform step'
  }
};
