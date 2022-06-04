var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {Object} params Options for this library.
 * @param {Number} id Content identifier
 * @returns {undefined}
 */
(function ($) {
  H5P.Image = function (params, id, extras) {
    H5P.EventDispatcher.call(this);
    this.extras = extras;

    if (params.file === undefined || !(params.file instanceof Object)) {
      this.placeholder = true;
    }
    else {
      this.source = H5P.getPath(params.file.path, id);
      this.width = params.file.width;
      this.height = params.file.height;
    }

    this.alt = params.alt !== undefined ? params.alt : 'New image';

    if (params.title !== undefined) {
      this.title = params.title;
    }
  };

  H5P.Image.prototype = Object.create(H5P.EventDispatcher.prototype);
  H5P.Image.prototype.constructor = H5P.Image;

  /**
   * Wipe out the content of the wrapper and put our HTML in it.
   *
   * @param {jQuery} $wrapper
   * @returns {undefined}
   */
  H5P.Image.prototype.attach = function ($wrapper) {
    var self = this;
    var source = this.source;

    if (self.$img === undefined) {
      if(self.placeholder) {
        self.$img = $('<div>', {
          width: '100%',
          height: '100%',
          class: 'h5p-placeholder',
          title: this.title === undefined ? '' : this.title,
          on: {
            load: function () {
              self.trigger('loaded');
              handleXAPI();
            }
          }
        });
      } else {
        self.$img = $('<img>', {
          width: '100%',
          height: '100%',
          src: source,
          alt: this.alt,
          title: this.title === undefined ? '' : this.title,
          on: {
            load: function () {
              self.trigger('loaded');
              handleXAPI();
            }
          }
        });
      }
    }

    /**
     * trigger XAPI based on activity if activity is CP then trigger after slide consumed else trigger on attach
     */
    var handleXAPI = function () {
      // for CP trigger only on slide open for others trigger on attach
      if (self.extras.hasOwnProperty("parent") && self.extras.parent.hasOwnProperty("presentation")) {
        self.on('trigger-consumed', function () {
          triggerXAPIConsumed();
        });
      } else {
        triggerXAPIConsumed();
      }
    };

    /**
     * Trigger the 'consumed' xAPI event
     *
     */
    var triggerXAPIConsumed = function () {
      var xAPIEvent = self.createXAPIEventTemplate({
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
          'en-US': self.title !== undefined ? self.title : 'Image'
        }
      });

      self.trigger(xAPIEvent);
    };

    $wrapper.addClass('h5p-image').html(self.$img);
  };

  return H5P.Image;
}(H5P.jQuery));
