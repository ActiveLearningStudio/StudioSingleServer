var H5P = H5P || {};

H5P.TwitterUserFeed = (function ($) {

  /**
   * Constructor function.
   */
  function C(options, id, contentData) {
    H5P.EventDispatcher.call(this);

    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      userName: 'H5PTechnology',
      showReplies: false,
      numTweets: 5
    }, options);
    // Keep provided id.
    this.id = id;
    this.contentData = contentData;
  }

  // Inheritance
  C.prototype = Object.create(H5P.EventDispatcher.prototype);
  C.prototype.constructor = C;

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    var self = this;
    this.setUpTwitter();

    // notify that twitter feed has been loaded
    twttr.ready(function (twttr) {
        twttr.events.bind('loaded', function () {
          self.trigger('loaded');
          // trigger resize event once twitter feed has been loaded
          self.trigger('resize');
        });
          self.handleXAPI();
        // self.triggerXAPI('interacted');
      }
    );

    // Set class on container to identify twitter user feed
    $container.addClass("h5p-twitter-user-feed");

    $container.append(
      '<a class="twitter-timeline" href="https://twitter.com/'+this.options.userName+'"' +
      'data-widget-id="558756407995273216" data-screen-name="' + this.options.userName +
      '" data-show-replies="' + this.options.showReplies +
      '" data-tweet-limit="' + this.options.numTweets + '">Tweets by @' +
      this.options.userName + '</a>');

    if (window.twttr !== undefined && window.twttr.widgets !== undefined) {
      window.twttr.widgets.load($container.get(0));
      
    }
  };

  C.prototype.setUpTwitter = function() {
    if (window.twttr) {
      return; // Already set up
    }

    // Load widgets api if not already done
    var id = 'twitter-wjs';
    if (!document.getElementById(id)) {
      // Create script tag
      var js = document.createElement('script');
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";

      // Insert before first head JS
      var firstJS = document.getElementsByTagName('script')[0];
      firstJS.parentNode.insertBefore(js, firstJS);
    }

    // Create twttr object used by script
    window.twttr = {
      _e: [],
      ready: function (callback) {
        window.twttr._e.push(callback);
      }
    };
  };

  /**
   * trigger XAPI based on activity if activity is CP then trigger after slide consumed else trigger on attach
   */
  C.prototype.handleXAPI = function () {
    // for CP trigger only on slide open for others trigger on attach
    if (this.contentData.hasOwnProperty("parent") && this.contentData.parent.hasOwnProperty("presentation")) {
      this.on('trigger-consumed', function () {
        this.triggerConsumed();
      });
    } else {
      this.triggerConsumed();
    }
  };


  C.prototype.triggerConsumed = function () {
   var title = this.contentData.hasOwnProperty("metadata") && this.contentData.metadata.hasOwnProperty("title") ? this.contentData.metadata.title : "Twitter User Feed";
    var xAPIEvent = this.createXAPIEventTemplate({
      id: 'http://activitystrea.ms/schema/1.0/consume',
      display: {
        'en-US': 'consumed'
      }
    }, {
      result: {
        completion: true
      }
    });

    Object.assign(xAPIEvent.data.statement.object.definition, {
      name:{
        'en-US': title
      }
    });

    this.trigger(xAPIEvent);
  };

  return C;
})(H5P.jQuery);
