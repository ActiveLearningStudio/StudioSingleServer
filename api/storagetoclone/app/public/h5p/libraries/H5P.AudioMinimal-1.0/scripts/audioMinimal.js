var H5P = H5P || {};

/**
 * Audio Minimal module
 * @external {jQuery} $ H5P.jQuery
 */
H5P.AudioMinimal = (function ($) {
  //CSS main class:
  var INNER_CONTAINER = "h5p-word-inner";

  //CSS button states:
  var AUDIO_BUTTON = "h5p-audio-minimal-button";
  var PLAY_BUTTON = "h5p-audio-minimal-play";
  var PAUSE_BUTTON = "h5p-audio-minimal-pause";

  /**
   * Initialize module.
   * @param {Object} params Behavior settings
   * @param {Number} id Content identification
   *
   * @returns {Object} C Audio Minimal instance
   */
  function C(params, id) {
    this.$ = $(this);
    this.id = id;

    // Set default behavior.
    this.params = $.extend({}, {
      files: null,
      autoplay: false
    }, params);
  }

  /**
   * Append field to wrapper.
   * @param {jQuery} $container the jQuery object which this module will attach itself to.
   */
  C.prototype.attach = function ($container) {
    var self = this;
    self.$inner = $('<div/>', {
      class: INNER_CONTAINER
    }).appendTo($container);

    if (self.params.files === null) {
      return;
    }

    var audioPath = H5P.getPath(self.params.files[0].path, self.id);
    self.$audioPlayer = $('<audio/>', {
      src: audioPath
    }).appendTo(this.$inner);

    self.$audioButton = $('<button/>', {
      class: AUDIO_BUTTON+' '+PLAY_BUTTON
    }).appendTo(self.$inner)
      .click( function () {
        if (self.$audioButton.hasClass(PLAY_BUTTON)) {
          self.$audioButton.removeClass(PLAY_BUTTON);
          self.$audioButton.addClass(PAUSE_BUTTON);
          self.$audioPlayer.get(0).play();
        }
        else {
          self.$audioButton.removeClass(PAUSE_BUTTON);
          self.$audioButton.addClass(PLAY_BUTTON);
          self.$audioPlayer.get(0).pause();
        }
      });

    //Auto start playing
    if (self.params.autoplay) {
      self.$audioButton.removeClass(PLAY_BUTTON);
      self.$audioButton.addClass(PAUSE_BUTTON);
      self.$audioPlayer.attr({autoplay: true});
    }

    self.$audioPlayer.get(0).addEventListener('ended', function () {
      self.$audioButton.removeClass(PAUSE_BUTTON);
      self.$audioButton.addClass(PLAY_BUTTON);
    });

  };

  return C;

})(H5P.jQuery);
