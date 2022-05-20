/** @namespace H5P */
var H5P = H5P || {};

/**
 * Counter module
 * @external {jQuery} $ H5P.jQuery
 */
H5P.Counter = (function ($) {
  // CSS Classes:
  var MAIN_CONTAINER = 'h5p-counter';
  var TITLE_CONTAINER = 'h5p-counter-title';
  var IMAGE_CONTAINER = 'h5p-counter-image-container';
  var COUNTING_CONTAINER = 'h5p-counter-counting-container';

  // CSS Subclasses:
  var IMAGE_BACKGROUND = 'h5p-counter-image-background';
  var OVER_IMAGE = 'h5p-counter-on-image';
  var STOP_CLOCK_BAR = 'h5p-counter-stop-clock-bar';
  var COUNTER_TEXT = 'h5p-counter-text';

  // CSS Buttons:
  var START_CLOCK_BUTTON = 'h5p-counter-start-button';
  var PAUSE_CLOCK_BUTTON = 'h5p-counter-pause-button';
  var RESTART_CLOCK_BUTTON = 'h5p-counter-restart-button';

  // Clock types:
  var COUNT_DOWN = 'countDown';
  var STOP_CLOCK = 'stopClock';

  /**
   * Initialize module.
   * @param {Object} params Behavior settings
   * @param {Number} id Content identification
   * @returns {Object} C Counter instance
   */
  function Counter(params, id) {
    this.$ = $(this);
    this.id = id;

    // Set default behavior.
    this.params = $.extend({}, {
      title: "Christmas countdown",
      textField: "There is only @time left until christmas!",
      clockType: "countDown",
      date: {
        hour: 0,
        minute: 0,
        day: 24,
        month: 12,
        year: 2014
      },
      imageGroup: {
        backgroundImage: null,
        textOverlay: true,
        xPos: 10,
        yPos: 10
      },
      stopClockGroup: {
        startClockButton: "Start",
        pauseClockButton: "Pause",
        restartClockButton: "Restart"
      },
      enableMonths: false,
      enableWeeks: false,
      enableDays: true,
      enableHours: true,
      enableMinutes: true,
      enableSeconds: true,
      enableShortFormat: false,
      finishedText: ''
    }, params);
  }

  /**
   * Attach function called by H5P framework to insert H5P content into page.
   *
   * @param {jQuery} $container
   */
  Counter.prototype.attach = function ($container) {
    var self = this;
    self.$inner = $container.addClass(MAIN_CONTAINER)
        .html('<div><div class=' + TITLE_CONTAINER + '>' + self.params.title + '</div></div>')
        .children();

    // set the date we're counting down to, or up from.
    var targetDate = new Date(self.params.date.year, parseInt(self.params.date.month, 10) - 1, self.params.date.day,
      self.params.date.hour, self.params.date.minute, 0, 0);

    self.$countingContainer = $('<div/>', {
      'class': COUNTING_CONTAINER
    }).appendTo(self.$inner);

    self.$counting = $('<div/>', {
      'class': COUNTER_TEXT
    }).appendTo(self.$countingContainer);

    //Attach image, if provided.
    self.addImageTo(self.$inner);

    //replace variable chosenDate
    self.params.textField = self.params.textField.replace(/@chosenDate/g, targetDate.toDateString());

    self.targetDateInSeconds = targetDate.getTime();

    // update the counting timer every second.
    self.myCounter = setInterval(function () {
      return self.updateClock();
    }, 1000);

    //Attach stop clock functionality, if selected.
    self.addStopClockTo(self.$countingContainer);
  };

  /**
   * Gets the current time and updates the counter depending on what type of counter it is.
   */
  Counter.prototype.updateClock = function () {
    // find the amount of seconds between now and target
    var currentDateInSeconds = new Date().getTime();
    var self = this;

    //Counting up or down.
    var secondsLeft = self.params.clockType === COUNT_DOWN ? (self.targetDateInSeconds - currentDateInSeconds) / 1000 : (currentDateInSeconds - self.targetDateInSeconds) / 1000;
    if (secondsLeft <= 0) {
      if (self.params.clockType === COUNT_DOWN) {
        secondsLeft = 0;
      }
      clearInterval(self.myCounter);
      self.setFinishedText();
      return;
    }

    self.updateCountingText(secondsLeft);
  };

  /**
   * Add stop clock bar and functionality to $container.
   *
   * @param {jQuery} $container Jquery container which the stop clock bar will be attached to.
   */
  Counter.prototype.addStopClockTo = function ($container) {
    var self = this;
    if (self.params.clockType !== STOP_CLOCK) {
      return;
    }
    var isCounting = false;
    clearInterval(self.myCounter);
    self.updateCountingText(0);

    self.$stopClockBar = $('<div/>', {
      'class': STOP_CLOCK_BAR
    }).appendTo($container);

    //Make start and restart clock buttons with click functionality.
    self.$startClock = $('<button/>', {
      'type': 'button',
      'text': self.params.stopClockGroup.startClockButton,
      'class': START_CLOCK_BUTTON
    }).click(function () {
      self.targetDate = new Date();
      if (isCounting) {
        self.targetDate.setTime(self.targetDate.getTime() - self.elapsedTime);
      }
      self.targetDateInSeconds = self.targetDate.getTime();
      isCounting = true;
      self.myStopClock = setInterval(function () {
        return self.updateClock();
      }, 1000);
      $(this).hide();
      self.$restartClock.show();
      self.$pauseClock.show();
    }).appendTo(self.$stopClockBar);

    self.$pauseClock = $('<button/>', {
      'type': 'button',
      'text': self.params.stopClockGroup.pauseClockButton,
      'class': PAUSE_CLOCK_BUTTON
    }).hide().
      click(function () {
        if (isCounting) {
          clearInterval(self.myStopClock);
          var currentTime = new Date().getTime();
          self.elapsedTime = currentTime - self.targetDateInSeconds;
          $(this).hide();
          self.$startClock.show();
        }
      }).appendTo(self.$stopClockBar);

    self.$restartClock = $('<button/>', {
      'type': 'button',
      'text': self.params.stopClockGroup.restartClockButton,
      'class': RESTART_CLOCK_BUTTON
    }).hide()
      .click(function () {
        isCounting = false;
        clearInterval(self.myStopClock);
        self.updateCountingText(0);
        $(this).hide();
        self.$pauseClock.hide();
        self.$startClock.show();
        self.elapsedTime = 0;
      }).appendTo(self.$stopClockBar);
  };

  /**
   * Set finished text in the counting container, if provided.
   */
  Counter.prototype.setFinishedText = function () {
    var self = this;
    //When counting is done, display finished text, if it has been specified.
    if (self.params.finishedText !== '') {
      self.$counting.html(self.params.finishedText);
    }
  };

  /**
   * Adds image to the provided container.
   *
   * @param {jQuery} $container jQuery container which the image will be appended to.
   */
  Counter.prototype.addImageTo = function ($container) {
    var self = this;
    if (self.params.imageGroup.backgroundImage === null) {
      return;
    }
    self.$imageContainer = $('<div/>', {
      'class': IMAGE_CONTAINER
    }).appendTo($container);

    if (self.params.imageGroup.backgroundImage && self.params.imageGroup.backgroundImage.path) {
      self.initialWidth = $container.width();
      var height = (self.initialWidth / self.params.imageGroup.backgroundImage.width) * self.params.imageGroup.backgroundImage.height;

      $('<img/>', {
        'class': IMAGE_BACKGROUND,
        'src': H5P.getPath(self.params.imageGroup.backgroundImage.path, self.id)
      }).css({width: self.initialWidth, height: height})
        .appendTo(self.$imageContainer);

      if (self.params.imageGroup.textOverlay) {
        self.$countingContainer.addClass(OVER_IMAGE)
            .css({top: self.params.imageGroup.yPos + '%',
              left: self.params.imageGroup.xPos + '%'})
            .appendTo(self.$imageContainer);
      }
    }
  };

  /**
   * Updates the counting text with the provided seconds, and divides these seconds into
   * correct time units, and puts the resulting string into self.$counting container.
   *
   * @param {Number} secondsLeft The amount of seconds to do calculations on.
   */
  Counter.prototype.updateCountingText = function (secondsLeft) {
    var shortFormat = '';
    var longFormat = '';
    var self = this;

    /**
     * Divides seconds left on the given time unit, returns the amount of the given time unit,
     * and puts the remainder in secondsLeft. Also adds the provided format to your format strings.
     *
     * @param {Boolean} isEnabled Decides whether the given time unit is enabled for this instance.
     * @param {Number} secondsPerUnit How many seconds the given time unit contains.
     * @param {String} longFormatString Long format of the time unit. f.ex: "Months, ".
     * @param {String} shortFormatString Short format of the time unit. f.ex: "m, ".
     *
     * @returns {Number} Amount of time unit in seconds left.
     */
    function addTimeUnit(isEnabled, secondsPerUnit, longFormatString, shortFormatString) {
      if (!isEnabled) {
        return 0;
      }
      var timeUnitAmount = parseInt(secondsLeft / secondsPerUnit, 10);
      secondsLeft = secondsLeft % secondsPerUnit;
      if (timeUnitAmount > 0) {
        longFormat += timeUnitAmount + longFormatString;
        shortFormat += timeUnitAmount + shortFormatString;
      }
      return timeUnitAmount;
    }

    //Does calculations on the provided time units.
    var months = addTimeUnit(self.params.enableMonths, 2592000, ' Months, ', 'm, ');
    var weeks = addTimeUnit(self.params.enableWeeks, 604800, ' Weeks, ', 'w, ');
    var days = addTimeUnit(self.params.enableDays, 86400, ' Days, ', 'd, ');
    var hours = addTimeUnit(self.params.enableHours, 3600, ' Hours, ', 'h, ');
    var minutes = addTimeUnit(self.params.enableMinutes, 60, ' Minutes', 'm');
    if (self.params.enableSeconds && (secondsLeft > 0) && self.params.enableMinutes && (minutes > 0)) {
      longFormat += ' and ';
      shortFormat += ', ';
    }
    var seconds = addTimeUnit(self.params.enableSeconds, 1, ' Seconds', 's');

    if (shortFormat === '' && longFormat === '') {
      shortFormat = '0s';
      longFormat = '0 Seconds';
    }

    var chosenFormat = self.params.enableShortFormat ? shortFormat : longFormat;
    //Replace variables in string.
    var htmlCounter = self.params.textField.replace(/@counter/g, chosenFormat)
        .replace(/@months/g, String(months))
        .replace(/@weeks/g, String(weeks))
        .replace(/@days/g, String(days))
        .replace(/@hours/g, String(hours))
        .replace(/@minutes/g, String(minutes))
        .replace(/@seconds/g, String(seconds));

    // set html of $counting object to htmlCounter
    self.$counting.html(htmlCounter);
  };


  return Counter;
}(H5P.jQuery));
