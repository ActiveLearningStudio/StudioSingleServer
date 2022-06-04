H5P.AdvancedText = (function ($, EventDispatcher) {

  /**
   * A simple library for displaying text with advanced styling.
   *
   * @class H5P.AdvancedText
   * @param {Object} parameters
   * @param {Object} [parameters.text='New text']
   * @param {number} id
   * @param {Object} contentData
   */
  function AdvancedText(parameters, id, contentData) {
    var self = this;
    EventDispatcher.call(this);

    var html = (parameters.text === undefined ? '<em>New text</em>' : parameters.text);

    this.contentData = contentData;
    if (contentData && contentData.hasOwnProperty("metadata")) {
      this.title = contentData.metadata.title;
    }

    /**
     * Wipe container and add text html.
     *
     * @alias H5P.AdvancedText#attach
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      $container.addClass('h5p-advanced-text').html(html);

      // for CP trigger only on slide open for others trigger on attach
      if (this.contentData.hasOwnProperty("parent") && this.contentData.parent.hasOwnProperty("presentation")) {
        self.on('trigger-consumed', function () {
          self.triggerXAPIConsumed();
        });
      } else {
        self.triggerXAPIConsumed();
      }

    };


    /**
     * Trigger the 'consumed' xAPI event
     *
     */
    self.triggerXAPIConsumed = function () {
      const xAPIEvent = self.createXAPIEventTemplate({
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
        name: {
          'en-US': this.title || 'Text'
        }
      });

      self.trigger(xAPIEvent);
    };
  }

  AdvancedText.prototype = Object.create(EventDispatcher.prototype);
  AdvancedText.prototype.constructor = AdvancedText;

  return AdvancedText;

})(H5P.jQuery, H5P.EventDispatcher);
