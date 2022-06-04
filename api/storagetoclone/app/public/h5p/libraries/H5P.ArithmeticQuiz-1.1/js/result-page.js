H5P.ArithmeticQuiz.ResultPage = (function ($, UI) {
  /**
   * Creates a ResultPage instance
   *
   * @class
   * @namespace H5P.ArithmeticQuiz
   * @augments H5P.EventDispatcher
   *
   * @param  {number} maxScore Max score
   * @param  {Object} t Translation objects
   * @fires H5P.Event
   */
  function ResultPage(maxScore, t, options){
    H5P.EventDispatcher.call(this);
    var self = this;

    this.$resultPage = $('<div>', {
      'class': 'h5p-baq-result-page'
    });

    this.$feedbackContainer = $('<div>', {
      'class': 'h5p-baq-result-page-feedback'
    }).appendTo(this.$resultPage);

    this.$scoreStatus = $('<div>', {
      'class': 'h5p-baq-result-page-score-status',
      'aria-live': 'assertive'
    }).appendTo(this.$feedbackContainer);

    this.$scoreStatus.append($('<div>', {
      'class': 'h5p-baq-result-page-header',
      'html': t.resultPageHeader
    }));

    this.maxScore = maxScore;
    this.scoreBar = UI.createScoreBar(maxScore);
    this.scoreBar.appendTo(this.$scoreStatus);

    this.$ariaScoreBar = $('<div>', {
      'class': 'hidden-but-read',
      appendTo: this.$scoreStatus,
    });

    this.$time = $('<div>', {
      'class': 'h5p-baq-result-page-time',
      'aria-hidden': true,
    }).appendTo(this.$scoreStatus);

    /**
     * Note: Wee need a separate assistive technology field for time beecause
     * some readers are not able to interpret the duration format of <time>
     */
    this.$ariaTime = $('<div>', {
      'class': 'hidden-but-read',
    }).appendTo(this.$scoreStatus);

    UI.createButton({
      text: t.retryButton,
      'class': 'mq-control-button',
      click: function () {
        $('.submit-button').show();
        $('.custom-submit-message').hide();
        self.trigger('retry');
        self.update(0, '00:00');
        self.scoreBar.reset();
      }
    }).appendTo(this.$feedbackContainer);
    if (!options.currikisettings.disableSubmitButton) {
    UI.createButton({
      text: options.currikisettings.currikil10n.submitAnswer,
      'class': 'mq-control-button submit-button',
      click: function () {
        H5P.jQuery('.h5p-baq-result-page-score-status').append($('<div>', {
          'class': 'h5p-baq-result-page-header custom-submit-message',
          'html':"Result has been submitted successfully"
        }));
        var score = Number($('.h5p-joubelui-score-number-counter').html());
        
        // trigger completed

        var time_elem = H5P.jQuery('time').html();
        var time_spent = time_elem.replace("Time: ", "");

        let minutes = parseInt(time_spent.split(':')[0], 10);
        let seconds = parseInt(time_spent.split(':')[1], 10);
        
        //const dateTimewa = 'PT' + minutes + 'M' + seconds + 'S'; //PT6.25S
        //const dateTimewa = 'PT6.25S';
        const customProgressedEvent = self.createXAPIEventTemplate('completed');
        customProgressedEvent.data.statement.object = JSON.parse(localStorage.getItem("XAPIEventObject"));
        customProgressedEvent.data.statement.context = JSON.parse(localStorage.getItem("XAPIEventContext"));
        
        
      
        if (customProgressedEvent.data.statement.object) {
          customProgressedEvent.setScoredResult(
            score,
            maxScore
          );

          customProgressedEvent.data.statement.result["response"] = localStorage.getItem("userInputwa");
          //customProgressedEvent.data.statement.result.duration = dateTimewa;
          self.trigger(customProgressedEvent);
        }

        // trigger submitted-curriki

        const customProgressedEventCompleted = self.createXAPIEventTemplate('submitted-curriki');
        customProgressedEventCompleted.data.statement.object = JSON.parse(localStorage.getItem("XAPIEventObject"));
        customProgressedEventCompleted.data.statement.context = JSON.parse(localStorage.getItem("XAPIEventContext"));;
      
      
        if (customProgressedEventCompleted.data.statement.object) {
          customProgressedEventCompleted.setScoredResult(
            score,
            maxScore
          );

          customProgressedEventCompleted.data.statement.result["response"] = localStorage.getItem("userInputwa");
          self.trigger(customProgressedEventCompleted);
        }

        $(this).hide();
      }
    }).appendTo(this.$feedbackContainer);
  }

    this.$resultAnnouncer = $('<div>', {
      'class': 'h5p-baq-live-feedback',
      'aria-live': 'assertive',
    }).appendTo(this.$resultPage);

    /**
     * Creates result page
     *
     * @return {H5P.jQuery}
     */
    this.create = function () {
      return this.$resultPage;
    };

    /**
     * Get score as a string
     * @param {Number} score Current score
     * @return {String} Score string
     */
    this.getReadableScore = function (score) {
      return t.score + ' ' + score + '/' + this.maxScore;
    };

    /**
     * Get readable time
     * @param {String} time Current time in the format: "minutes:seconds"
     * @returns {*|void|string|null}
     */
    this.getReadableTime = function (time) {
      return t.time.replace('@time', time.replace(':', ', '));
    };

    /**
     * Announce result page info
     * @param {Number} score Current score
     * @param {String} time Current time in the format: "minutes:seconds"
     */
    this.announce = function (score, time) {
      let text = t.resultPageHeader + ' ';
      text +=  this.getReadableScore(score) + '. ';
      text += this.getReadableTime(time);

      // Readspeaker needs a small delay after creating the aria live field
      // in order to pick up the change
      setTimeout(function () {
        self.$resultAnnouncer.text(text);
      }, 100);
    };

    /**
     * Updates result page
     *
     * @param  {number} score
     * @param  {string} time
     */
    this.update = function (score, time) {
      let minutes = parseInt(time.split(':')[0], 10);
      let seconds = parseInt(time.split(':')[1], 10);
      const dateTime = 'PT' + minutes + 'M' + seconds + 'S';
      const timeHtml = '<time datetime="' + dateTime + '">' + time + '</time>';
      this.$time.html(H5P.ArithmeticQuiz.tReplace(t.time, {time: timeHtml}));
      this.$ariaTime.html(this.getReadableTime(time));
      this.scoreBar.setScore(score);
      this.$ariaScoreBar.text(this.getReadableScore(score));

      this.announce(score, time);
    };
  }
  ResultPage.prototype = Object.create(H5P.EventDispatcher.prototype);
  ResultPage.prototype.constructor = ResultPage;

  return ResultPage;

})(H5P.jQuery, H5P.JoubelUI);
