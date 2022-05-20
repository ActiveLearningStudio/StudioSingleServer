H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.OverviewStep = (function ($, JoubelUI) {

  function OverviewStep(IPEditor) {

    // Default viewport
    var defaultViewport = {
      height: 360,
      width: 640
    };

    // Zoom factor
    var zoomFactor = 5;

    // Current zoom state
    var isZoomedOut = false;

    // Create button
    var $overviewButton = JoubelUI.createButton({
      'class': 'h5p-impress-overview-step-button',
      'title': H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'showOverview', {})
    }).click(function () {
      toggleOverviewStep();
      IPEditor.refocusView();
    });

    // Create zoom factor widget
    var $zoomFactorWrapper = $('<div>', {
      'class': 'h5p-impress-overview-step-zoom-factor hidden',
      appendTo: IPEditor.$preview
    });

    $('<div>', {
      'class': 'h5p-impress-overview-step-zoom-factor-label',
      html: H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'zoomFactorLabel'),
      appendTo: $zoomFactorWrapper
    });

    var minZoom = 1;
    var maxZoom = 20;
    $('<input>', {
      'class': 'h5p-impress-overview-step-zoom-factor-input',
      type: 'number',
      'step': 0.5,
      'min': minZoom,
      'max': maxZoom,
      value: zoomFactor,
      appendTo: $zoomFactorWrapper
    }).bind('change keyup', function () {
      var newValue = $(this).val();
      if (newValue === '' || isNaN(newValue)) {
        return;
      }

      if (newValue < minZoom) {
        $(this).val(minZoom);
        newValue = minZoom;
      }
      else if (newValue > maxZoom) {
        $(this).val(maxZoom);
        newValue = maxZoom;
      }

      zoomFactor = newValue;

      // Set new zoom
      if (isZoomedOut) {
        toggleOverviewStep(true);
      }
    });

    /**
     * Toggle overview step
     *
     * @param {boolean} [enable] Force zoom state
     */
    var toggleOverviewStep = function (enable) {
      if (enable !== undefined) {
        isZoomedOut = !enable;
      }

      if (isZoomedOut) {
        // Restore defaults
        IPEditor.setViewport(defaultViewport);
      }
      else {
        // Zoom out
        IPEditor.setViewport({
          height: defaultViewport.height * zoomFactor,
          width: defaultViewport.width * zoomFactor
        });
      }
      $zoomFactorWrapper.toggleClass('hidden', isZoomedOut);
      $overviewButton.toggleClass('active', !isZoomedOut);
      IPEditor.refreshView();

      // Update zoom state
      isZoomedOut = !isZoomedOut;
    };

    /**
     * Update default viewport
     */
    this.updateDefaultViewport = function () {
      defaultViewport = IPEditor.getViewport();
    };

    /**
     * Append overview button to element
     *
     * @param {jQuery} $wrapper Wrapper for button
     * @returns {H5PEditor.ImpressPresentationEditor.OverviewStep}
     */
    this.appendTo = function ($wrapper) {
      $overviewButton.appendTo($wrapper);

      return this;
    }
  }

  return OverviewStep;
})(H5P.jQuery, H5P.JoubelUI);
