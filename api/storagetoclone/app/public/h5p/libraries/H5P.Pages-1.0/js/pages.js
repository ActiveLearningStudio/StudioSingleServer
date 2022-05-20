var H5P = H5P || {};

/**
 * Will render several content pages with multiple content instances on each page
 *
 * @param {Array} content
 * @param {int} contentId
 * @returns {H5P.Pages} Instance
 */
H5P.Pages = (function ($) {
        
  function C (content, contentId) {
    if (!(this instanceof H5P.Pages)) {
      return new H5P.Pages(content, contentId);
    }
    
    var defaults = {
      pages: [],
      texts: {
        prevButton: 'Previous',
        nextButton: 'Next',
        finishButton: 'Finish',
        textualProgress: 'Page @current of @total',
        scoreString: '@score of @maxScore'
      }
    };
    this.params = $.extend(true, {}, defaults, content);

    this.currentPage = 0;
    this.pages = new Array();
    this.$myDom;
    
    // Instantiate pages
    for (var i = 0; i < this.params.pages.length; i++) {
      var pageData = this.params.pages[i].pageContent;

      // override content parameters.
      if (this.params.override && this.params.override.overrideButtons) {
        // Extend subcontent with the overrided settings.
        $.extend(pageData.params.behaviour, {
          enableRetry: this.params.override.overrideRetry,
          enableSolutionsButton: this.params.override.overrideShowSolutionButton
        });
      }

      $.extend(pageData.params, {
        postUserStatistics: false
      });
      this.pages.push(H5P.newRunnable(pageData, contentId));
    }
    H5P.QuestionContainer.call(this, this.pages, contentId);
  }
  
  C.prototype = Object.create(H5P.QuestionContainer.prototype);
  C.prototype.constructor = C;

  // Update button state.
  C.prototype.updateButtons = function () {
    var answered = true;
    for (var i = 0; i < this.pages.length; i++) {
      answered = answered && (this.pages[i]).getAnswerGiven();
    }

    if (this.currentPage === 0) {
      $('.h5p-pages-prev', this.$myDom).hide();
    } else {
      $('.h5p-pages-prev', this.$myDom).show();
    }
    if (this.currentPage === (this.pages.length - 1)) {
      $('.h5p-pages-next', this.$myDom).hide();
      if (answered) {
        $('.h5p-pages-finish', this.$myDom).show();
      }
    } else {
      $('.h5p-pages-next', this.$myDom).show();
      $('.h5p-pages-finish', this.$myDom).hide();
    }
 };

  C.prototype.showPage = function (pageNumber) {
    // Sanitize input.
    if (pageNumber < 0) {
      pageNumber = 0;
    }
    if (pageNumber >= this.pages.length) {
      pageNumber = this.pages.length - 1;
    }

     // Hide all pages except the one we are to show
    $('.h5p-page', this.$myDom).hide().eq(pageNumber).show();

    // Trigger resize in case the size of the new page is different from the last
    var page = this.pages[pageNumber];
    if (page.$ !== undefined) {
      page.$.trigger('resize');
    }

    // Update progress indicator
    $('.h5p-pages-page-number', this.$myDom).text(this.params.texts.textualProgress.replace("@current", pageNumber+1).replace("@total", this.pages.length));

    this.currentPage = pageNumber;
    this.updateButtons();
  };

  C.prototype.rendered = false;

  C.prototype.reRender = function () {
    this.rendered = false;
  };

  C.prototype.displayEndPage = function () {
    if (this.rendered) {
      this.$myDom.children().hide().filter('.h5p-results').show();
      return;
    }
    this.rendered = true;

    // Get total score.
    var score = getScore();
    var maxScore = totalScore();
    var scoreString = params.texts.scoreString.replace("@score", score).replace("@maxScore", maxScore);
    var success = ((100 * score / maxScore) >= this.params.passPercentage);
    var eventData = {
      score: scoreString,
      passed: success
    };
    var displayResults = function () {
      // TODO: Replace with xAPI
      if (this.params.postUserStatistics === true) {
        H5P.setFinished(this.contentId, getScore(), getMaxScore());
      }

      if (!this.params.endGame.showResultPage) {
        //$(returnObject).trigger('h5pPagesFinished', eventData);
        return;
      }

      // TODO: Add code for the actual results page
    };

    // Trigger finished event.
    displayResults();
  };

  // Function for attaching the pages to a dom element.
  C.prototype.attach = function (target) {
    
    if (typeof(target) === "string") {
      this.$myDom = $('#' + target);
    }
    else {
      this.$myDom = $(target);
    }

    var self = this;

    this.$myDom.addClass('h5p-pages');

    var $myHTML = $('<div class="h5p-pages"></div>');
    var $pagesContainer = $('<div class="h5p-pages-container"></div>');
    
    // Attach pages
    for (var i = 0; i < this.pages.length; i++) {
      var page = this.pages[i];

      var $pageContainer = $('<div class="h5p-page"></div>');

      page.attach($pageContainer);
      $(page).on('h5pQuestionAnswered', function () {
        this.updateButtons();
      });
      $pagesContainer.append($pageContainer);
    }
    
    $pageContainer.append('<div class="h5p-clearfix"></div>');
    $myHTML.append($pagesContainer);

    var $navigation = $('<div class="h5p-pages-navigation"></div>');
    var $prev = H5P.JoubelUI.createButton({
      'class': 'h5p-pages-prev',
      href: '#',
      text: this.params.texts.prevButton
    })
      .click(function(e) {
        self.showPage(self.currentPage - 1);
        e.preventDefault();
      })
      .appendTo($navigation);
    var $pageNumber = $('<span class="h5p-pages-page-number">' + this.params.texts.textualProgress + '</span>').appendTo($navigation);
    var $next = H5P.JoubelUI.createButton({
      'class': 'h5p-pages-next',
      href: '#',
      text: this.params.texts.nextButton
    })
      .click(function(e) {
        self.showPage(self.currentPage + 1);
        e.preventDefault();
      })
      .appendTo($navigation);
    var $finish = H5P.JoubelUI.createButton({
      'class': 'h5p-pages-finish',
      text: this.params.texts.finishButton
    })
      .click(function(e) {
        self.displayEndPage();
        e.preventDefault();
      })
      .appendTo($navigation);
    
    $myHTML.append($navigation).appendTo(this.$myDom);
    

    // Allow other libraries to add transitions after the pages have been inited
    $('.h5p-pages', this.$myDom).addClass('started');

    // Hide all but initial Question.
    this.showPage(0);

    if (this.renderSolutions) {
      showSolutions();
    }
    
    this.$.trigger('resize');
    return this;
  };

  return C;
})(H5P.jQuery);

