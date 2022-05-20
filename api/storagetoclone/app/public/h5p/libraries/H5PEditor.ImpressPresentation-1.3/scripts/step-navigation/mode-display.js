H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.ModeDisplay = (function ($, JoubelUI) {

  function ModeDisplay(IPEditor) {

    var $modeContainer = $('<div>', {
      'class': 'h5p-mode-container hide'
    });

    $('<div>', {
      'class': 'h5p-mode-title',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'mode', {})
    }).appendTo($modeContainer);

    var $activeMode = $('<div>', {
      'class': 'h5p-mode-active'
    }).appendTo($modeContainer);

    this.appendTo = function ($wrapper) {
      $modeContainer.appendTo($wrapper);
    };

    this.setText = function (text) {
      $activeMode.html(text);

      return this;
    };

    this.show = function () {
      $modeContainer.removeClass('hide');

      return this;
    };

    this.hide = function () {
      $modeContainer.addClass('hide');

      return this;
    };
  }

  return ModeDisplay;
})(H5P.jQuery, H5P.JoubelUI);
