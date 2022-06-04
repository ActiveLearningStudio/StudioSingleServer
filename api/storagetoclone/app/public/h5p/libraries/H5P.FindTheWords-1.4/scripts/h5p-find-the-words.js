H5P.FindTheWords = (function ($, UI) {
  const ELEMENT_MIN_SIZE = 32; // PX
  const ELEMENT_MAX_SIZE = 64; // PX
  const MARGIN = 8; //PX
  const VOCABULARY_INLINE_WIDTH = 200;// PX

  /**
   * FindTheWords.
   * @class H5P.FindTheWords
   * @extends H5P.EventDispatcher
   * @param {Object} options
   * @param {number} id
   * @param {Object} extras
   */
  function FindTheWords(options, id, extras) {

    /** @alias H5P.FindTheWords# */
    this.id = id;
    this.extras = extras;
    this.numFound = 0;
    this.isAttempted = false;
    this.isGameStarted = false;

    // Only take the unique words
    const vocabulary = options.wordList
      .split(',')
      .map(function (word) {
        return word.trim().replace(/ +/g, '');
      })
      .filter(function (word, pos, self) {
        return self.indexOf(word) === pos && word.length > 0;
      });

    this.options = $.extend(true, {
      vocabulary: vocabulary,
      height: 5,
      width: 5,
      fillBlanks: true,
      maxAttempts: 5,
      l10n: {
        wordListHeader: 'Find the words'
      },
      currikisettings:{
        disableSubmitButton: false,
        currikil10n: {
          submitAnswer: 'Submit'
        }
      }
    }, options);

    H5P.EventDispatcher.call(this);

    this.gridParams = {
      height: this.options.height,
      width: this.options.width,
      orientations: filterOrientations(options.behaviour.orientations),
      fillBlanks: this.options.fillBlanks,
      maxAttempts: this.options.maxAttempts,
      preferOverlap: options.behaviour.preferOverlap,
      vocabulary: this.options.vocabulary,
      gridActive: true,
      fillPool: this.options.behaviour.fillPool
    };

    this.grid = new FindTheWords.WordGrid(this.gridParams);
    this.vocabulary = new FindTheWords.Vocabulary(
      this.options.vocabulary,
      this.options.behaviour.showVocabulary,
      this.options.l10n.wordListHeader
    );
    this.registerDOMElements();

    // responsive functionality
    this.on('resize', function () {
      const currentSize = this.elementSize;
      const currentVocMod = this.isVocModeBlock;
      this.calculateElementSize();
      this.setVocabularyMode();

      if (this.elementSize !== currentSize) {
        this.$puzzleContainer.empty();
        this.grid.appendTo(this.$puzzleContainer, this.elementSize );
        this.grid.drawGrid(MARGIN);

        // If there are already marked elements on the grid mark them
        if (!this.grid.options.gridActive) {
          this.grid.enableGrid();
          this.grid.mark(this.vocabulary.getFound());
          this.grid.disableGrid();
          this.grid.mark(this.vocabulary.getSolved());
        }
        else {
          this.grid.mark(this.vocabulary.getFound());
        }

        this.registerGridEvents();
      }

      // vocabulary adjustments on resize
      if (this.options.behaviour.showVocabulary) {
        if (currentVocMod !== this.isVocModeBlock ) {
          this.vocabulary.setMode(this.isVocModeBlock);
          if (this.isVocModeBlock) {
            this.$puzzleContainer.removeClass('puzzle-inline').addClass('puzzle-block');
          }
          else {
            //initial update has to be done manually
            this.$playArea.css({'width': parseInt(this.$gameContainer.width()) + VOCABULARY_INLINE_WIDTH});
            this.$puzzleContainer.removeClass('puzzle-block').addClass('puzzle-inline');
          }
        }
      }

      // Make the playarea just to fit its content
      if (! this.isVocModeBlock) {
        this.$playArea.css({'width': parseInt(this.$gameContainer.width()) + 2});
      }
      else {
        this.$playArea.css({'width': parseInt(this.$puzzleContainer.width()) + 2});
      }
    });
  }

  FindTheWords.prototype = Object.create(H5P.EventDispatcher.prototype);
  FindTheWords.prototype.constructor = FindTheWords;

  // private and all prototype function goes there

  /**
   * filterOrientations - Mapping of directions from semantics to those used by algorithm.
   * @param {Object} directions
   * @return {Object[]}
   */
  const filterOrientations = function (directions) {
    return Object.keys(directions).filter(function (key) {
      return directions[key];
    });
  };

  /**
   * registerDOMElements.
   */
  FindTheWords.prototype.registerDOMElements = function () {
    const that = this;

    this.$playArea = $('<div />', {
      class: 'h5p-play-area'
    });

    this.$taskDescription = $('<div />', {
      class: 'h5p-task-description',
      html: this.options.taskDescription,
      tabIndex: 0,
    });

    // timer part
    this.$timer = $('<div/>', {
      class: 'time-status',
      tabindex: 0,
      html: '<span role="term" ><em class="fa fa-clock-o" ></em>' +
        this.options.l10n.timeSpent + '</span >:' +
        '<span role="definition"  class="h5p-time-spent" >0:00</span>'
    });
    this.timer = new FindTheWords.Timer(this.$timer.find('.h5p-time-spent'));

    // counter part
    const counterText = that.options.l10n.found
      .replace('@found', '<span class="h5p-counter">0</span>')
      .replace('@totalWords', '<span><strong>' + this.vocabulary.words.length + '</strong></span>');

    this.$counter = $('<div/>', {
      class: 'counter-status',
      tabindex: 0,
      html: '<div role="term"><span role="definition">' + counterText + '</span></div>'
    });
    this.counter = new FindTheWords.Counter(this.$counter.find('.h5p-counter'));

    // feedback plus progressBar
    this.$feedback = $('<div/>', {
      class: 'feedback-element',
      tabindex: '0'
    });
    this.$progressBar = UI.createScoreBar(this.vocabulary.words.length, 'scoreBarLabel');

    // buttons section
    /*
    that.$viewSummaryButton = that.createButton('show-summary', 'View summary', 'View summary' , function () {   
      var  xAPIAnsEvent = this.createXAPIEventTemplate('answered');
      this.addQuestionToXAPI(xAPIAnsEvent);
      this.addResponseToXAPI(xAPIAnsEvent);
      this.trigger(xAPIAnsEvent);
      
      var user_response = xAPIAnsEvent.data.statement.result.response;
      var total_score = that.getMaxScore();
      var scored_result = that.getScore();
      var confirmationDialog = new H5P.ConfirmationDialog({
              headerText: 'Find the words summary',
              dialogText: that.showSummary(total_score,scored_result,user_response),
              cancelText: 'Cancel',
              confirmText: "Submit Answers"
            });
            confirmationDialog.on('confirmed', function () {
               that.triggerXAPIScored(scored_result,total_score, 'submitted-curriki');
              H5P.jQuery('.h5p-question-check-answer').click();
              
            });
            confirmationDialog.appendTo(parent.document.body);
            confirmationDialog.show();
    });
    */

    that.$checkButton = that.createButton('check', 'check', "Check", that.gameSubmitted);
    if (this.options.behaviour.enableShowSolution) {
      this.$showSolutionButton = this.createButton('solution', 'eye', this.options.l10n.showSolution, that.showSolutions);
    }
    if (this.options.behaviour.enableRetry) {
      this.$retryButton = this.createButton('retry', 'undo', this.options.l10n.tryAgain, that.resetTask);
    }
    if(!that.options.currikisettings.disableSubmitButton && typeof this.parent == "undefined") {
      that.$submitButton = that.createButton('submit', 'submit', that.options.currikisettings.currikil10n.submitAnswer, that.answersSubmitted);
    }

    // container elements
    this.$gameContainer = $('<div class="game-container"/>');
    this.$puzzleContainer = $('<div class="puzzle-container puzzle-inline" tabIndex="0" role="grid" />');
    this.$vocabularyContainer = $('<div class="vocabulary-container" tabIndex="0" />');
    this.$footerContainer = $('<div class="footer-container" />');
    this.$statusContainer = $('<div />', {
      class: 'game-status',
      'aria-label': 'game-status',
      role: 'group',
      tabindex: '0'
    });
    this.$feedbackContainer = $('<div class="feedback-container"/>');
    this.$buttonContainer = $('<div class="button-container" />');
  };


  FindTheWords.prototype.showSummary = function (total_score,scored_result,user_response) {
    var summary_html = "";
    var user_response_ary = user_response.split("[,]");
    if(user_response_ary.length > 0  && user_response_ary[0] != ""){
       var table_content = '<tbody>';
       var is_correct = "Correct";
       for (var m =0; m < user_response_ary.length; m++){
        table_content += '<tr>';
        table_content += '<td>'+user_response_ary[m]+'</td>';
        table_content += '<td>'+is_correct+'</td>';
        table_content += '</tr>';

      }
      var summary_html = '<div class="custom-summary-section"><div class="h5p-summary-table-pages"><table class="h5p-score-table-custom" style="min-height:100px;width:100%"><thead><tr><th>Ans</th><th>Correct</th></tr></thead>'+table_content+'</table></div></div>';
      var table_content_overall_score = '<tbody>';
      var overall_summary_html = '<div class="custom-score-section"><b>Overall Score: </b>You got '+scored_result+' of '+total_score+' points.</div>';
      var summary_html = summary_html.concat(overall_summary_html);
    }else{
      var summary_html = "You did not attempt activity yet.";
    }
    return summary_html;
  }

  /**
   * createButton - creating all buttons used in this game.
   * @param {string} name Buttonname.
   * @param {string} icon Fa icon name.
   * @param {string} param Button text parameter.
   * @param {function} callback Callback function.
   * @return {H5P.JoubelUI.Button} Joubel ui button object.
   */
  FindTheWords.prototype.createButton = function (name, icon, param, callback) {
    const cfunction = callback.bind(this);
    return UI.createButton({
      title: name,
      click: cfunction,
      html: '<span><i class="fa fa-' + icon + '" aria-hidden="true"></i></span>' + param
    });
  };

  /**
   * calculateElementSize - calculate the grid element size according to the container width.
   */
  FindTheWords.prototype.calculateElementSize = function () {
    const containerWidth = this.$container.width();
    const gridCol = this.grid.wordGrid[0].length;
    const gridMaxWidth = gridCol * ELEMENT_MAX_SIZE + 2 * MARGIN;
    const gridElementStdSize = (containerWidth - 2 * MARGIN) / gridCol;

    if (gridMaxWidth < containerWidth) {
      this.elementSize = ELEMENT_MAX_SIZE;
    }
    else if (gridElementStdSize > ELEMENT_MIN_SIZE) {
      this.elementSize = gridElementStdSize;
    }
    else {
      this.elementSize = ELEMENT_MAX_SIZE;
    }
  };

  /**
   * setVocabularyMode - set vocabulary mode (either inline or block).
   */
  FindTheWords.prototype.setVocabularyMode = function () {
    const gridCol = this.grid.wordGrid[0].length;
    this.isVocModeBlock = (this.$container.width() - (gridCol * this.elementSize + 2 * MARGIN) > VOCABULARY_INLINE_WIDTH) ? false : true;
  };

  /**
   * gameSubmitted - callback function for check button.
   */
  FindTheWords.prototype.gameSubmitted = function () {
    const totalScore = this.vocabulary.words.length;
    const scoreText = this.options.l10n.score
      .replace('@score', this.numFound)
      .replace('@total', totalScore);

    this.timer.stop();
    this.$progressBar.setScore(this.numFound);
    this.$feedback.html(scoreText);
    this.$checkButton = this.$checkButton.detach();
    this.grid.disableGrid();

    if (totalScore !== this.numFound) {
      if (this.options.behaviour.enableShowSolution) {
        this.$showSolutionButton.appendTo(this.$buttonContainer);
      }
    }

    if (this.options.behaviour.enableRetry) {
      this.$retryButton.appendTo(this.$buttonContainer);
    }

    if(!this.options.currikisettings.disableSubmitButton && typeof this.parent == "undefined") {
      this.$submitButton.appendTo(this.$buttonContainer);
    }

    this.$feedbackContainer.addClass('feedback-show'); //show feedbackMessage
    this.$feedback.focus();

    const xAPIEvent = this.createXAPIEventTemplate('answered');
    this.addQuestionToXAPI(xAPIEvent);
    this.addResponseToXAPI(xAPIEvent);
    this.trigger(xAPIEvent);

    // trigger completed XAPI
    var completedEvent = this.createXAPIEventTemplate('completed');
    completedEvent.setScoredResult(this.getScore(), this.getMaxScore(), this, true, this.getScore() === this.getMaxScore());
    completedEvent.data.statement.result.duration = 'PT' + (Math.round(this.timer.getTime() / 10) / 100) + 'S';
    this.trigger(completedEvent);

    this.trigger('resize');
  };

  /**
   * showSolutions - call back function for show solution button.
   */
  FindTheWords.prototype.showSolutions = function () {
    this.grid.disableGrid();
    this.grid.mark(this.vocabulary.getNotFound());
    this.vocabulary.solveWords();
    this.$showSolutionButton.detach();
    this.$vocabularyContainer.focus();
    this.trigger('resize');
    if (!this.isSubmitted && !this.options.currikisettings.disableSubmitButton) {
      this.$submitButton.appendTo(this.$buttonContainer);
    }
    this.removeSubmitAnswerFeedback();
  };

  /**
   * resetTask - resetting the game.
   */
  FindTheWords.prototype.resetTask = function () {
    this.numFound = 0;
    this.isSubmitted = false;
    this.timer.reset();
    this.counter.reset();
    this.$progressBar.reset();
    this.$puzzleContainer.empty();
    this.vocabulary.reset();
    this.removeSubmitAnswerFeedback();

    if (this.$showSolutionButton) {
      this.$showSolutionButton.detach();
    }
    if(this.$submitButton) {
      this.$submitButton.detach();
    }

    this.$retryButton.detach();
    this.$feedbackContainer.removeClass('feedback-show');

    this.grid = new FindTheWords.WordGrid(this.gridParams);
    this.grid.appendTo(this.$puzzleContainer, this.elementSize);
    this.grid.drawGrid(MARGIN);
    this.grid.enableGrid();
    this.registerGridEvents();

    this.$checkButton.appendTo(this.$buttonContainer);
    //this.$viewSummaryButton.appendTo(this.$buttonContainer);
    this.$puzzleContainer.focus();

    this.trigger('resize');
  };

  FindTheWords.prototype.answersSubmitted = function () {
    this.isSubmitted = true;
    this.$submitButton = this.$submitButton.detach();
    // trigger submitted-curriki XAPI
    this.triggerXAPIScored(this.getScore(), this.getMaxScore(), 'submitted-curriki');
    var $submit_message = '<div class="submit-answer-feedback" style = "color: red">Result has been submitted successfully</div>';
    this.$feedbackContainer.after($submit_message);
  };

  /**
   * Remove submit answer feedback div
   */
  FindTheWords.prototype.removeSubmitAnswerFeedback = function () {
    H5P.jQuery('.submit-answer-feedback').remove();
  };


  /**
   * Check whether user is able to play the game.
   * @return {boolean}
   */
  FindTheWords.prototype.getAnswerGiven = function () {
    return this.isAttempted;
  };

  /**
   *  getScore - Return the score obtained.
   * @return {number}
   */
  FindTheWords.prototype.getScore = function () {
    return this.numFound;
  };

  /**
   * Turn the maximum possible score that can be obtained.
   * @return {number}
   */
  FindTheWords.prototype.getMaxScore = function () {
    return this.vocabulary.words.length;
  };

  /**
   * getXAPIData - Get xAPI data.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
   * @return {Object} xApi data statement
   */
  FindTheWords.prototype.getXAPIData = function () {
    const xAPIEvent = this.createXAPIEventTemplate('answered');
    this.addQuestionToXAPI(xAPIEvent);
    this.addResponseToXAPI(xAPIEvent);
    return {
      statement: xAPIEvent.data.statement
    };
  };

  /**
   * addQuestionToXAPI - Add the question to the definition part of an xAPIEvent.
   * @param {H5P.XAPIEvent} xAPIEvent
   */
  FindTheWords.prototype.addQuestionToXAPI = function (xAPIEvent) {
    const definition = xAPIEvent.getVerifiedStatementValue(
      ['object', 'definition']
    );
    definition.description = {
      'en-US': this.options.taskDescription
    };
    definition.type =
      'http://adlnet.gov/expapi/activities/cmi.interaction';
    definition.interactionType = 'choice';
    definition.correctResponsesPattern = [];
    definition.correctResponsesPattern[0] = this.vocabulary.words.join([',']);
    definition.choices = [];
    this.vocabulary.words.forEach((value, index) => {
      definition.choices[index] = {
        id: value.toString(),
        description: {
          'en-US': value.toString()
        }
      }
    });

  };

  /**
   * Add the response part to an xAPI event.
   * @param {H5P.XAPIEvent} xAPIEvent
   */
  FindTheWords.prototype.addResponseToXAPI = function (xAPIEvent) {
    const maxScore = this.getMaxScore();
    const score = this.getScore();
    const success = (score === maxScore);
    const response = this.vocabulary.getFound().join('[,]');

    xAPIEvent.setScoredResult(score, maxScore, this, true, success);
    xAPIEvent.data.statement.result.response = response;
    xAPIEvent.data.statement.result.duration = 'PT' + (Math.round(this.timer.getTime() / 10) / 100) + 'S';
  };

  /**
   * registerGridEvents.
   */
  FindTheWords.prototype.registerGridEvents = function () {
    const that = this;

    this.grid.on('drawStart', function () {
      if (!that.isGameStarted) {
        that.timer.play();
        that.triggerXAPI('interacted');
        that.isGameStarted = true;
      }
    });

    this.grid.on('drawEnd', function (event) {
      that.isAttempted = true;
      if (that.vocabulary.checkWord(event.data['markedWord'])) {
        that.numFound++;
        that.counter.increment();
        that.grid.markWord(event.data['wordObject']);
        if (that.numFound === that.vocabulary.words.length) {
          that.gameSubmitted();
        }
      }
    });
  };

  /**
   * attach - main attach function.
   * @param {H5P.jQuery} $container Description.
   */
  FindTheWords.prototype.attach = function ($container) {
    this.$container = $container.addClass('h5p-find-the-words');
    this.triggerXAPI('attempted');

    if (this.grid) {
      this.calculateElementSize();
      this.grid.appendTo(this.$puzzleContainer, this.elementSize );
      this.$puzzleContainer.appendTo(this.$gameContainer);
      if (this.options.behaviour.showVocabulary) {
        this.setVocabularyMode();
        this.vocabulary.appendTo(this.$vocabularyContainer, this.isVocModeBlock);
        this.$vocabularyContainer.appendTo(this.$gameContainer);
      }
    }

    this.$timer.appendTo(this.$statusContainer);
    this.$counter.appendTo(this.$statusContainer);

    this.$feedback.appendTo(this.$feedbackContainer);
    this.$progressBar.appendTo(this.$feedbackContainer);

    //this.$viewSummaryButton.appendTo(this.$buttonContainer);
    this.$checkButton.appendTo(this.$buttonContainer);

    //append status and feedback and button containers to footer
    this.$statusContainer.appendTo(this.$footerContainer);
    this.$feedbackContainer.appendTo(this.$footerContainer);
    this.$buttonContainer.appendTo(this.$footerContainer);

    //append description , cards and footer to main container.
    this.$taskDescription.appendTo(this.$playArea);
    this.$gameContainer.appendTo(this.$playArea);
    this.$footerContainer.appendTo(this.$playArea);
    this.$playArea.appendTo(this.$container);

    this.grid.drawGrid(MARGIN);
    this.registerGridEvents();
    this.trigger('resize');
  };

  return FindTheWords;

}) (H5P.jQuery, H5P.JoubelUI);
