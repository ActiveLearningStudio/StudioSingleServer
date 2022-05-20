// based on http://www.jqueryscript.net/accordion/Accessible-Smooth-jQuery-Toggle-Panel-Accordion-Plugin.html
var H5P = H5P || {};

/**
 * Call to action module
 *
 * @param {jQuery} $
 */
H5P.CallToAction = (function ($) {
  
  var nextIdPrefix = 0;
  
  /**
   * Initialize module.
   * @param {Object} params Behavior settings
   * @param {Number} contentId Content identification
   * @param {Object} contentData Object containing task specific content data
   *
   * @returns {Object} CallToAction instance
   */
  function CallToAction(params, contentId, contentData) {
    var self = this;
    this.contentId = contentId;
    H5P.EventDispatcher.call(this);

    // Set default behavior.
    this.params = $.extend({}, {
      buttonText: "Getting started",
      actions: []
    }, params);

    this.contentData = contentData;
    
    this.actions = [];
    
    this.idPrefix = nextIdPrefix++;
  }
  
  CallToAction.prototype = Object.create(H5P.EventDispatcher.prototype);
  CallToAction.prototype.constructor = CallToAction;

  /**
   * Append field to wrapper.
   * @public
   * @param {jQuery} container the jQuery object which this module will attach itself to.
   */
  CallToAction.prototype.attach = function ($container) {
    $container.addClass('h5p-call-to-action-holder');
    var self = this;
    
    var $callToAction = $('<button>', {
      'class': 'h5p-call-to-action',
      'role': 'button', // TODO: Check WAI Aria...
      'html': this.params.buttonText,
      'aria-expanded': false,
      'aria-controls': 'h5p-actions-list-' + this.idPrefix
    }).appendTo($container).click(function() {
      if ($(this).attr('aria-expanded') === 'false'){
        $(this).attr('aria-expanded', true)
          .addClass('h5p-actions-expanded')
          .next('.h5p-actions-list')
          .stop()
          .slideDown(200, function() {
            self.trigger('resize');
          })
          .attr('aria-hidden', 'false');
        } else {
          console.log('HERE');
          $(this).attr('aria-expanded', false)
            .removeClass('h5p-actions-expanded')
            .next('.h5p-actions-list')
            .stop()
            .slideUp(200, function() {
              self.trigger('resize');
            })
            .attr('aria-hidden', 'true');
        }
        return false;
    });
    
    var $actionsList = $('<ul>', {
      'class': 'h5p-actions-list',
      'id': 'h5p-actions-list-' + this.idPrefix,
      'aria-hidden': true
    }).appendTo($container);
    for (var i = 0; i < this.params.actions.length; i++) {
      var $action = $('<li>', {
        'class': 'h5p-action'
      }).appendTo($actionsList);
      var $actionLink =  $('<a>', {
        'html': this.params.actions[i].title,
        'href': this.params.actions[i].url
      }).appendTo($action);
    }
  };
  
  return CallToAction;
})(H5P.jQuery);