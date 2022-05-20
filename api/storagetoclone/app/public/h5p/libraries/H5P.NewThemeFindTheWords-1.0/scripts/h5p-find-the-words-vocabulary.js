(function (NewThemeFindTheWords, EventDispatcher, $) {

  /**
   * Vocabulary - Handles the vocabulary part.
   * @class H5P.NewThemeFindTheWords.Vocabulary
   * @param {Object} params
   * @param {boolean} showVocabulary
   */
  NewThemeFindTheWords.Vocabulary = function (params, showVocabulary, header) {
    /** @alias H5P.NewThemeFindTheWords.Vocabulary# */
    this.words = params;
    this.header = header;
    this.showVocabulary = showVocabulary;
    this.wordsFound = [];
    this.wordsNotFound = [];
    this.wordsSolved = [];
  };

  NewThemeFindTheWords.Vocabulary.prototype = Object.create(EventDispatcher.prototype);
  NewThemeFindTheWords.Vocabulary.prototype.constructor = NewThemeFindTheWords.Vocabulary;

  /**
   * appendTo - appending vocabulary to the play area.
   * @param {H5P.jQuery} $container
   * @param {string} isModeBlock Either in inline/block mode.
   */
  NewThemeFindTheWords.Vocabulary.prototype.appendTo = function ($container, isModeBlock) {
    let output = '<div class="vocHeading"><em class="fa fa-book fa-fw" ></em>' +
      this.header + '</div><ul role="list" tabindex="0">';
    this.words.forEach(function (element) {
      const identifierName = element.replace(/ /g, '');
      output += '<li role="presentation" ><div role="listitem"  aria-label="' + identifierName + ' not found" id="' + identifierName + '"class="word">\
      <em class="fa fa-check" ></em>' + element + '</div></li>';
    });
    output += '</ul>';

    $container.html(output);
    $container.addClass('vocabulary-container');
    this.$container = $container;
    this.setMode(isModeBlock);
  };

  /**
   * setMode - set the vocabularies.
   * @param {string} mode
   */
  NewThemeFindTheWords.Vocabulary.prototype.setMode = function (isModeBlock) {
    this.$container
      .toggleClass('vocabulary-block-container', isModeBlock)
      .toggleClass('vocabulary-inline-container', !isModeBlock);
  };

  /**
   * checkWord - if the marked word belongs to the vocabulary as not found.
   * @param {string} word
   */
  NewThemeFindTheWords.Vocabulary.prototype.checkWord = function (word) {
    const reverse = word.split('').reverse().join('');
    const originalWord = (this.words.indexOf(word) !== -1) ? word : ( this.words.indexOf(reverse) !== -1) ? reverse : null;

    if (!originalWord || this.wordsFound.indexOf(originalWord) !== -1) {
      return false;
    }

    this.wordsFound.push(originalWord);
    if (this.showVocabulary) {
      const idName = originalWord.replace(/ /g, '');
      this.$container.find('#' + idName).addClass('word-found').attr('aria-label', idName + ' found');
    }

    return true;
  };

  /**
   * reset - reset the vocabulary upon game resetting.
   */
  NewThemeFindTheWords.Vocabulary.prototype.reset = function () {
    this.wordsFound = [];
    this.wordsNotFound = this.words;
    if (this.showVocabulary) {
      this.$container.find('.word').each(function () {
        $(this).removeClass('word-found').removeClass('word-solved').attr('aria-label', $(this).attr('id') + ' not found');
      });
    }
  };

  /**
   * solveWords - changes on vocabulary upon showing the solution.
   */
  NewThemeFindTheWords.Vocabulary.prototype.solveWords = function () {
    const that = this;
    that.wordsSolved = that.wordsNotFound;
    if (that.showVocabulary) {
      that.wordsNotFound.forEach(function (word) {
        const idName = word.replace(/ /g, '');
        that.$container.find('#' + idName).addClass('word-solved').attr('aria-label', idName + ' solved');
      });
    }
  };

  /**
   * getNotFound - return the list of words that are not found yet.
   * @return {Object[]}
   */
  NewThemeFindTheWords.Vocabulary.prototype.getNotFound = function () {
    const that = this;
    this.wordsNotFound = this.words.filter(function (word) {
      return (that.wordsFound.indexOf(word) === -1);
    });
    return this.wordsNotFound;
  };

  /**
   * getFound - returns the words found so far.
   * @return {Object[]}
   */
  NewThemeFindTheWords.Vocabulary.prototype.getFound = function () {
    const that = this;
    return this.words.filter(function (word) {
      return (that.wordsFound.indexOf(word) !== -1);
    });
  };

  /**
   * getSolved - get the words solved by the game by show solution feature.
   * @return {Object[]}
   */
  NewThemeFindTheWords.Vocabulary.prototype.getSolved = function () {
    const that = this;
    return this.words.filter(function (word) {
      return (that.wordsSolved.indexOf(word) !== -1);
    });
  };

  return NewThemeFindTheWords.Vocabulary;

}) (H5P.NewThemeFindTheWords, H5P.EventDispatcher, H5P.jQuery);
