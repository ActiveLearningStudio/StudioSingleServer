var H5P = H5P || {};

/**
 * Will render several columns with potentially multiple content instances in each column
 *
 * @param {Array} content
 * @param {int} contentId
 * @returns {H5P.Columns} Instance
 */
H5P.Columns = (function ($) {
        
  function C (content, contentId) {
    if (!(this instanceof H5P.Columns)) {
      return new H5P.Columns(content, contentId);
    }

    H5P.QuestionContainer.call(this, content.columns, contentId);
    
    var defaults = {
      columns: [],
      type: 'div'
    };
    this.params = $.extend(true, {}, defaults, content);

    this.columns = new Array();
    this.$myDom;
    
    var totalWidth = 0;
    
    // Instantiate column instances
    for (var i = 0; i < this.params.columns.length; i++) {
      var columnData = this.params.columns[i].column;
      // override content parameters.
      if (this.params.override && this.params.override.overrideButtons) {
        // Extend subcontent with the overrided settings.
        $.extend(columnData.params.behaviour, {
          enableRetry: this.params.override.overrideRetry,
          enableSolutionsButton: this.params.override.overrideShowSolutionButton
        });
      }
      
      totalWidth += this.params.columns[i].width;

      $.extend(columnData.params, {
        postUserStatistics: false
      });
      
      
      
      this.columns.push(H5P.newRunnable(columnData, contentId));
    }
    
    // Make space for a 2 % margin:
    var sumColWidth = (99.999999 - 2 * (this.params.columns.length - 1));
    
    for (var i = 0; i < this.params.columns.length; i++) {
      this.params.columns[i].relativeWidth = this.params.columns[i].width / totalWidth * sumColWidth;
    }
  }
  
  C.prototype = Object.create(H5P.QuestionContainer.prototype);
  C.prototype.constructor = C;

  // Function for attaching the pages to a dom element.
  C.prototype.attach = function (target) {
    var $target;
    if (typeof(target) === "string") {
      $target = $('#' + target);
    }
    else {
      $target = $(target);
    }
    this.$myDom = $('<' + this.params.type + '>').addClass('h5p-columns').appendTo($target);

    // Attach columns
    for (var i = 0; i < this.columns.length; i++) {
      var column = this.columns[i];
      
      var $columnHolder = $('<div class="h5p-column"></div>')
        .css("width", this.params.columns[i].relativeWidth + '%');

      if (this.params.columns[i].cssClass !== '') {
        $columnHolder.addClass(this.params.columns[i].cssClass);
      }
      
      column.attach($columnHolder);
      this.$myDom.append($columnHolder);
    }

    this.$.trigger('resize');
    return this;
  };

  return C;
})(H5P.jQuery);
