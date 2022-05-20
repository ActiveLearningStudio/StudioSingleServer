/*global H5P*/
H5P.ConfirmationDialog = (function (EventDispatcher) {
  "use strict";

  /**
   * Create a confirmation dialog
   *
   * @param [options] Options for confirmation dialog
   * @param [options.dialogText] Dialog text
   * @param [options.cancelText] Cancel dialog button text
   * @param [options.confirmText] Confirm dialog button text
   * @constructor
   */
  function ConfirmationDialog(options) {
    EventDispatcher.call(this);
    var self = this;

    // Default options
    options = options || {};
    options.dialogText = options.dialogText ||
      'Please confirm that you wish to proceed.';
    options.cancelText = options.cancelText || 'Cancel';
    options.confirmText = options.confirmText || 'Confirm';

    // Create outer popup
    var popup = document.createElement('div');
    popup.classList.add('h5p-confirmation-dialog-popup', 'hidden');

    // Popup symbol
    var symbol = document.createElement('div');
    symbol.classList.add('h5p-confirmation-dialog-symbol');
    popup.appendChild(symbol);

    // Popup text
    var text = document.createElement('div');
    text.classList.add('h5p-confirmation-dialog-text');
    text.textContent = options.dialogText;
    popup.appendChild(text);

    // Popup buttons
    var buttons = document.createElement('div');
    buttons.classList.add('h5p-confirmation-dialog-buttons');
    popup.appendChild(buttons);

    // Cancel button
    var cancelButton = document.createElement('button');
    cancelButton.classList.add('h5p-confirmation-dialog-button',
      'h5p-confirmation-dialog-cancel-button');
    cancelButton.textContent = options.cancelText;
    cancelButton.onclick = function () {
      self.hide();
      self.trigger('canceled');
    };
    buttons.appendChild(cancelButton);

    // Confirm button
    var confirmButton = document.createElement('button');
    confirmButton.classList.add('h5p-confirmation-dialog-button',
      'h5p-confirmation-dialog-confirm-button');
    confirmButton.textContent = options.confirmText;
    confirmButton.onclick = function () {
      self.hide();
      self.trigger('confirmed');
    };
    buttons.appendChild(confirmButton);

    /**
     * Append confirmation dialog
     * @param $wrapper
     * @returns {H5P.ConfirmationDialog}
     */
    this.appendTo = function ($wrapper) {
      $wrapper.get(0).appendChild(popup);

      return this;
    };

    /**
     * Show confirmation dialog
     * @returns {H5P.ConfirmationDialog}
     */
    this.show = function () {
      popup.classList.remove('hidden');

      return this;
    };

    /**
     * Hide confirmation dialog
     * @returns {H5P.ConfirmationDialog}
     */
    this.hide = function () {
      popup.classList.add('hidden');

      return this;
    };
  }

  ConfirmationDialog.prototype = Object.create(EventDispatcher.prototype);
  ConfirmationDialog.prototype.constructor = ConfirmationDialog;

  return ConfirmationDialog;

}(H5P.EventDispatcher));
