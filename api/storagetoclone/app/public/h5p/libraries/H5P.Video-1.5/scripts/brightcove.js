try {
  if (window.bcPlayerExternal === undefined) {
      if (window.parent.brightcoveAccountId) {
        window.brightcoveAccountId = window.parent.brightcoveAccountId;
      } else if (window.brightcoveAccountId === undefined && window.parent.brightcoveAccountId === undefined) {
        window.brightcoveAccountId ='6282550302001';
      }
  }  
} catch (error) {
  if (window.brightcoveAccountId === undefined) {
    let brightcoveAccountId = window.localStorage.getItem('brightcoveAccountId')
    window.brightcoveAccountId = brightcoveAccountId ? brightcoveAccountId : '6282550302001'
  }
}

/** @namespace H5P */
H5P.VideoBrightcove = (function ($) {

  /**
   * Brightcove video player for H5P.
   *
   * @class
   * @param {Array} sources Video files to use
   * @param {Object} options Settings for the player
   * @param {Object} l10n Localization strings
   */

  function Brightcove(sources, options, l10n) {
    var loaderEl = null;
    if (window.bcPlayerExternal === undefined) {
      try {
        var loaderEl = H5P.jQuery('#activity-loader-alert', window.parent.document);
      } catch (error) {}
      if (!loaderEl) {
        loaderEl = H5P.jQuery('#activity-loader-alert');
      }
      loaderEl.html("<strong>Loading Brightcove Video ...</strong>").show();
    }

    var self = this;
    var player;
    self.getPlayer = function() { return player; }
    self.nullifyPlayer = function() { player = null; }
    var playbackRate = 1;
    var id = 'h5p-brightcove-' + numInstances;
    numInstances++;

    var videoId = options.brightcoveVideoID;
    var $wrapper = $('<div/>').attr('id','curriki-player-wrapper');
    var brightcoveData = getId({videoId});
    let videoJsTagId = 'curriki-brightcove';
    
    if (window.bcPlayerExternal) {
      window.bcPlayerExternalDefaultWidth = window.bcPlayerExternal.currentWidth();
      window.bcPlayerExternalDefaultHeight = window.bcPlayerExternal.currentHeight();
      let videoJsTagId = window.bcPlayerExternal.tagAttributes.id;
      window.videoJsTagIdGlobal = videoJsTagId;
      // H5P.jQuery('#' + videoJsTagId).appendTo($wrapper);
      H5P.jQuery('#' + videoJsTagId + ' video').appendTo($wrapper);
    } else {
      if (window.videojs) {
        window.videojs = undefined;
      }
      var $placeholder = $('<div/>', {id});
      H5P.jQuery($placeholder).hide();
      window.videoJsTagIdGlobal = videoJsTagId;
      H5P.jQuery('<video-js id="' + videoJsTagId + '" data-account="'+brightcoveData.dataAccount+'" data-player="'+brightcoveData.dataPlayer+'" data-embed="' + brightcoveData.dataEmbed +'" controls="" data-video-id="'+brightcoveData.dataVideoId+'" data-playlist-id="" data-application-id="" class="vjs-fluid"></video-js>').appendTo($placeholder);
      $placeholder.appendTo($wrapper);
    }
    
    self.brightcoveUrlParts = null;
    self.isPlayerLoaded = false;
    
    // Optional placeholder
    // var $placeholder = $('<iframe id="' + id + '" type="text/html" width="640" height="360" src="https://www.brightcove.com/embed/' + getId({brightcoveVideoID}) + '?enablejsapi=1&origin=' + encodeURIComponent(ORIGIN) + '&autoplay=' + (options.autoplay ? 1 : 0) + '&controls=' + (options.controls ? 1 : 0) + '&disabledkb=' + (options.controls ? 0 : 1) + '&fs=0&loop=' + (options.loop ? 1 : 0) + '&rel=0&showinfo=0&iv_load_policy=3" frameborder="0"></iframe>').appendTo($wrapper);

    /**
     * Use the Brightcove API to create a new player
     *
     * @private
     */
    var create = function () {
      
      if (player !== undefined) {
        return;
      }
     
      if (window.bcPlayerExternal !== undefined) {
        loadAPI();
        renderPlayer();
      } else {
        loadAPI();
        player = {};
        var videojsloadTime = setInterval(function(e) {
          if (window.videojs) {
            clearInterval(videojsloadTime);
            renderPlayer();
          }
        }, 300);
      }
      
    };


    function renderPlayer() {
      player = window.bcPlayerExternal ? window.bcPlayerExternal : window.videojs(videoJsTagId);
      player.tech_.off('dblclick');
      //************[start full screen]******************
      player.getChild('controlBar').removeChild('FullscreenToggle');
      var FullscreenToggle = window.videojs.getComponent('FullscreenToggle');
      var CurrikiFullScreenButton = window.videojs.extend(FullscreenToggle, {
        constructor: function() {
          FullscreenToggle.apply(this, arguments);
          //this.addClass('vjs-fullscreen-control');
        },
        handleClick: function() {
          H5P.jQuery('.h5p-controls').find('.h5p-fullscreen').trigger('click'); // trigger H5P Fullscreen to display overlay
        }
      });
      window.videojs.registerComponent('CurrikiFullScreenButton', CurrikiFullScreenButton);
      player.getChild('controlBar').addChild('currikiFullScreenButton', {});
      //************[end full screen]*********************
      
      if (window.bcPlayerExternal) {
        initializePlayerEvents();
        self.trigger('ready');
        self.trigger('loaded');
      } else {
        var playerTime = player.setInterval(function(e) {
          if (player.readyState() > 1) {
            initializePlayerEvents();
            H5P.jQuery('.loading-wrapper').remove();
            self.trigger('ready');
            self.trigger('loaded');
            H5P.jQuery($placeholder).show();
            if (loaderEl) {
              loaderEl.hide();
            }
            player.clearInterval(playerTime);
          }
        }, 300);
      }
      
    }

    function initializePlayerEvents() {
      player.on('play', function () {
        self.trigger('stateChange', H5P.Video.PLAYING);
      });

      player.on('pause', function () {
        self.trigger('stateChange', H5P.Video.PAUSED);
      });

      
      player.on('buffered', function () {
        self.trigger('stateChange', H5P.Video.BUFFERING);
      });

      player.on('ended', function () {
        self.trigger('stateChange', H5P.Video.ENDED);
      });
    }

    /**
     * Indicates if the video must be clicked for it to start playing.
     * For instance Brightcove videos on iPad must be pressed to start playing.
     *
     * @public
     */
    self.pressToPlay = navigator.userAgent.match(/iPad/i) ? true : false;

    /**
    * Appends the video player to the DOM.
    *
    * @public
    * @param {jQuery} $container
    */
    self.appendTo = function ($container) {
      if (window.bcPlayerExternal) {
        $container.parents('.h5p-content').wrap('<div class="h5p-content-outer"></div>')
      }
      $container.addClass('h5p-brightcove').append($wrapper);
      create();
    };

    /**
     * Get list of available qualities. Not available until after play.
     *
     * @public
     * @returns {Array}
     */
    self.getQualities = function () {
      if (!player || !player.getAvailableQualityLevels) {
        return;
      }

      var qualities = player.getAvailableQualityLevels();
      if (!qualities.length) {
        return; // No qualities
      }

      // Add labels
      for (var i = 0; i < qualities.length; i++) {
        var quality = qualities[i];
        var label = (LABELS[quality] !== undefined ? LABELS[quality] : 'Unknown'); // TODO: l10n
        qualities[i] = {
          name: quality,
          label: LABELS[quality]
        };
      }

      return qualities;
    };

    /**
     * Get current playback quality. Not available until after play.
     *
     * @public
     * @returns {String}
     */
    self.getQuality = function () {
      if (!player || !player.getPlaybackQuality) {
        return;
      }

      var quality = player.getPlaybackQuality();
      return quality === 'unknown' ? undefined : quality;
    };

    /**
     * Set current playback quality. Not available until after play.
     * Listen to event "qualityChange" to check if successful.
     *
     * @public
     * @params {String} [quality]
     */
    self.setQuality = function (quality) {
      if (!player || !player.setPlaybackQuality) {
        return;
      }

      player.setPlaybackQuality(quality);
    };

    /**
     * Start the video.
     *
     * @public
     */
    self.play = function () {
      if (!player || !player.play) {
        self.on('ready', self.play);
        return;
      }

      player.play();
    };

    /**
     * Pause the video.
     *
     * @public
     */
    self.pause = function () {
      self.off('ready', self.play);
      if (!player || !player.pause) {
        return;
      }
      player.pause();
    };

    /**
     * Seek video to given time.
     *
     * @public
     * @param {Number} time
     */
    self.seek = function (time) {
      if (!player || !player.currentTime) {
        return;
      }
      player.currentTime(time);
    };

    /**
     * Get elapsed time since video beginning.
     *
     * @public
     * @returns {Number}
     */
    self.getCurrentTime = function () {
      if (!player || !player.currentTime) {
        return;
      }
      return player.currentTime();
    };

    /**
     * Get total video duration time.
     *
     * @public
     * @returns {Number}
     */
    self.getDuration = function () {
      if (!player || !player.duration) {
        return;
      }
      return player.duration();
    };

    /**
     * Get percentage of video that is buffered.
     *
     * @public
     * @returns {Number} Between 0 and 100
     */
    self.getBuffered = function () {
      if (!player || !player.bufferedPercent) {
        return;
      }

      return player.bufferedPercent();
    };

    /**
     * Turn off video sound.
     *
     * @public
     */
    self.mute = function () {
      if (!player || !player.muted) {
        return;
      }

      player.muted(true);
    };

    /**
     * Turn on video sound.
     *
     * @public
     */
    self.unMute = function () {
      if (!player || !player.muted) {
        return;
      }

      player.muted(false);
    };

    /**
     * Check if video sound is turned on or off.
     *
     * @public
     * @returns {Boolean}
     */
    self.isMuted = function () {
      if (!player || !player.muted) {
        return;
      }

      return player.muted();
    };

    /**
     * Return the video sound level.
     *
     * @public
     * @returns {Number} Between 0 and 100.
     */
    self.getVolume = function () {
      if (!player || !player.volume) {
        return;
      }

      return player.volume();
    };

    /**
     * Set video sound level.
     *
     * @public
     * @param {Number} level Between 0 and 100.
     */
    self.setVolume = function (level) {
      if (!player || !player.volume) {
        return;
      }

      player.volume(level);
    };

    /**
     * Get list of available playback rates.
     *
     * @public
     * @returns {Array} available playback rates
     */
    self.getPlaybackRates = function () {
      return [0.25, 0.5, 1, 1.25, 1.5, 2];
    };

    /**
     * Get current playback rate.
     *
     * @public
     * @returns {Number} such as 0.25, 0.5, 1, 1.25, 1.5 and 2
     */
    self.getPlaybackRate = function () {
      if (!player || !player.playbackRate) {
        return;
      }

      return player.playbackRate();
    };

    /**
     * Set current playback rate.
     * Listen to event "playbackRateChange" to check if successful.
     *
     * @public
     * @params {Number} suggested rate that may be rounded to supported values
     */
    self.setPlaybackRate = function (newPlaybackRate) {
      if (!player || !player.playbackRate) {
        return;
      }

      playbackRate = Number(newPlaybackRate);
      player.playbackRate(playbackRate);
    };

    /**
     * Set current captions track.
     *
     * @param {H5P.Video.LabelValue} Captions track to show during playback
     */
    self.setCaptionsTrack = function (track) {
      player.setOption('captions', 'track', track ? {languageCode: track.value} : {});
    };

    /**
     * Figure out which captions track is currently used.
     *
     * @return {H5P.Video.LabelValue} Captions track
     */
    self.getCaptionsTrack = function () {
      var track = player.getOption('captions', 'track');
      return (track.languageCode ? new H5P.Video.LabelValue(track.displayName, track.languageCode) : null);
    };

    // Respond to resize events by setting the YT player size.
    self.on('resize', function () {
      
      if (!$wrapper.is(':visible')) {
        return;
      }

      if (!player) {
        // Player isn't created yet. Try again.
        create();
        return;
      }

      if (window.bcPlayerExternal) {
        H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').addClass('video-restyle-streched')
        H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').removeClass('video-restyle-shrinked');
        
        if ( (Math.round(window.bcPlayerExternal.currentWidth()) > Math.round(H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').width())) ) {
          H5P.jQuery('.h5p-content').width(H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').width());
          H5P.jQuery('.h5p-content').height(Math.round(window.bcPlayerExternal.currentHeight()));
          $wrapper.css({
            width: H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').width(),
          });
          $wrapper.css({
            height: Math.round(window.bcPlayerExternal.currentHeight()),
          });

        } else if (Math.round(window.bcPlayerExternal.currentHeight()) > Math.round(H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').height()) ) {
          // if player is shrinked with respect to video width
          H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').removeClass('video-restyle-streched')
          H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').addClass('video-restyle-shrinked');

          H5P.jQuery('.h5p-content').height(H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').height());
          $wrapper.css({
            height: H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').height(),
          });
        } else {
          H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').removeClass('video-restyle-streched')
          H5P.jQuery('#' + window.videoJsTagIdGlobal + ' video').addClass('video-restyle-shrinked');
          H5P.jQuery('.h5p-content').removeAttr('style');
          H5P.jQuery($wrapper).removeAttr('style');
        }
      } else {
        $wrapper.css({
          width: 'inherit',
          height: 'inherit'
        });
      }
      
    });
  }

  /**
   * Check to see if we can play any of the given sources.
   *
   * @public
   * @static
   * @param {Array} sources
   * @returns {Boolean}
   */

  /* 
  Brightcove.canPlay = function (sources) {
    return getId({videoId});
  };
  */

  /**
   * Find id of Brightcove video from given URL.
   *
   * @private
   * @param {String} url
   * @returns {String} Brightcove video identifier
   */

  var getId = function (brightcoveData) {
    let brightcoveUrlParts = {dataAccount: window.brightcoveAccountId, dataVideoId: brightcoveData.videoId, dataPlayer: 'default', dataEmbed: 'default'};
    self.brightcoveUrlParts = brightcoveUrlParts;
    return brightcoveUrlParts;
  };

  var getIdLegacy = function (url) {
    // Has some false positives, but should cover all regular URLs that people can find
    var matches = url.match(/((?:(?:https?|ftp|file):\/\/|www\.)players.brightcove.net)\/([0-9]*)\/(\w+)\/(index.html)\?(\w+)\=([0-9]*)/i);
    if (matches && matches.length === 7) {
      let dataPlayer = matches[3].split('_').length === 2 ? matches[3].split('_')[0] : 'default';
      let dataEmbed = matches[3].split('_')[1];
      let brightcoveUrlParts = {dataAccount: matches[2], dataVideoId: matches[6], dataPlayer, dataEmbed};
      self.brightcoveUrlParts = brightcoveUrlParts;
      return brightcoveUrlParts;
    }
  };

  /**
   * Load the IFrame Player API asynchronously.
   */
  var loadAPI = function () { 

    if (window.bcPlayerExternal) {
      let css = '.h5p-splash-wrapper { opacity: 0; }';
      css += ' .h5p-content { border: 0px; }';
      css += ' .h5p-controls { display: none !important; }';
      css += ' .h5p-actions { display: none !important; }';
      css += ' .vjs-has-started .vjs-control-bar { z-index: 2 !important; }';
      css += ' .vjs-poster,.vjs-dock-text,.vjs-dock-shelf,.vjs-loading-spinner,.vjs-big-play-button {position: absolute; z-index: 1;}';
      css += ' .h5p-content{margin: 0 auto !important;}';
      css += ' .video-restyle-shrinked {position: static !important; top: 0 !important; left: 0 !important; margin: 0 auto !important; display: block !important; height: auto !important;}';
      css += ' .video-restyle-streched {position: static !important; top: 0 !important; left: 0 !important; width: auto !important; height: 100% !important; margin: 0 auto !important; display: block !important;}';
      css += ' .h5p-seekbar-interaction {border: 4px solid #fff; position: absolute !important;}';
      let head = document.head || document.getElementsByTagName('head')[0];
      let style = document.createElement('style');
      head.appendChild(style);
      style.type = 'text/css';
      if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    } else if (!window.videojs) {
      // Load the API our self
      const script = document.createElement('script');
      script.src = "https://players.brightcove.net/" + self.brightcoveUrlParts.dataAccount + "/" + self.brightcoveUrlParts.dataPlayer + "_" + self.brightcoveUrlParts.dataEmbed + "/index.min.js";
      script.async = false;
      document.body.appendChild(script);
    } else {
      console.log("videojs lib found before initializing.");
    }
  };

  /** @constant {Object} */
  var LABELS = {
    highres: '2160p', // Old API support
    hd2160: '2160p', // (New API)
    hd1440: '1440p',
    hd1080: '1080p',
    hd720: '720p',
    large: '480p',
    medium: '360p',
    small: '240p',
    tiny: '144p',
    auto: 'Auto'
  };

  /** @private */
  var numInstances = 0;

  // Extract the current origin (used for security)
  var ORIGIN = window.location.href.match(/http[s]?:\/\/[^\/]+/);
  ORIGIN = !ORIGIN || ORIGIN[0] === undefined ? undefined : ORIGIN[0];
  // ORIGIN = undefined is needed to support fetching file from device local storage

  return Brightcove;
})(H5P.jQuery);

// Register video handler
H5P.videoHandlers = H5P.videoHandlers || [];
H5P.videoHandlers.push(H5P.VideoBrightcove);
