H5P.GlossaryTest = (function (EventDispatcher, React, ReactDOM, GlossaryList) {

  /**
   * Glossary Test Constructor
   *
   * @class
   * @param {Object} params Describes task behavior
   * @param {number} id Content identifier
   * @param {Object} data User specific data to adapt behavior
   */
  function GlossaryTest(params, id, data) {
    var self = this;

    // Initialize event inheritance
    EventDispatcher.call(self);

    // Make sure author input is safe to use in the application
    params = getSafeParams(params);

    /**
     * Attach the glossary test to the given container
     *
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      self.triggerXAPI('attempted');

      ReactDOM.render(
        React.createElement(GlossaryTest.Test, params),
        $container.get(0)
      );
    };
  }

  // Extends the event dispatcher
  GlossaryTest.prototype = Object.create(EventDispatcher.prototype);
  GlossaryTest.prototype.constructor = GlossaryTest;

  GlossaryTest.STAGE_START = 0;
  GlossaryTest.STAGE_PAGE = 1;
  GlossaryTest.STAGE_SUMMARY = 2;

  /**
   * Ensure valid and safe params to avoid any runtime errors.
   *
   * @private
   * @param {Object} params As specifed by the author
   * @return {Object} Safe to use in the application
   */
  function getSafeParams(params) {
    var safe = {
      from: params.from,
      to: params.to,
      words: getSafeWords(params.words)
    };

    if (!safe.from || !safe.to || !safe.words.length) {
      // Use default task instead of crashing
      safe.from = 'German';
      safe.to =   'English';
      safe.words = [
        {'original': 'Meer',  'translation': 'Sea'},
        {'original': 'Boot',  'translation': 'Boat'},
        {'original': 'Fisch', 'translation': 'Fish'}
      ];
    }

    // Make sure we have default translations
    safe.l10n = {
      translateFrom: 'Translate from',
      translateTo: 'Translate to',
      start: 'Start',
      finish: 'Finish',
      continue: 'Continue',
      checkAnswers: 'Check Answers',
      summary: 'You managed to get :num out of :total words!',
      startOver: 'Start Over'
    };
    if (params.l10n) {
      for (var key in safe.l10n) {
        if (params.l10n.hasOwnProperty(key) && params.l10n[key]) {
          // Use l10n specified by author
          safe.l10n[key] = params.l10n[key];
        }
      }
    }

    return safe;
  }

  /**
   * Will ensure that only safe words from the author get used.
   *
   * @private
   * @param {Array} words As specifed by the author
   * @param {Array} Safe to use in the application
   */
  function getSafeWords(words) {
    var safe = [];

    if (words) {
      for (var i = 0; i < words.length; i++) {
        var word = words[i];

        if (word.original && word.translation) {
          safe.push({
            'original': word.original,
            'translation': word.translation
          });
        }
      }
    }

    return safe;
  }

  return GlossaryTest;
})(H5P.EventDispatcher, H5P.React, H5P.ReactDOM, H5P.GlossaryList);
