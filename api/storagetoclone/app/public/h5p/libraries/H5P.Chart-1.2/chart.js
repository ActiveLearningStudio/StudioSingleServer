/*global H5P*/

/**
 * Graph Cake module
 * @external {jQuery} $ H5P.jQuery
 * @external {EventDispatcher} EventDispatcher H5P.EventDispatcher
 */
H5P.Chart = (function ($, EventDispatcher) {

  /**
   * Initialize module.
   *
   * @class
   * @param {Object} params Behavior settings
   * @param {Number} id Content identification
   * @param {Object} contentData content Data
   */
  function Chart(params, id, contentData) {
    var self = this;

    // Inheritance
    EventDispatcher.call(self);

    // Set params and filter data set to make sure it's valid
    self.params = params;
    if (self.params.listOfTypes) {
      Chart.filterData(self.params.listOfTypes);
    }
    else {
      self.params.listOfTypes = [];
    }

    // Add example/default behavior
    if (!self.params.listOfTypes.length) {
      self.params.listOfTypes = [
        {
          text: 'Cat',
          value: 1,
          color: '#D3D3D3',
          fontColor: '#000'
        },
        {
          text: 'Dog',
          value: 2,
          color: '#ADD8E6',
          fontColor: '#000'
        },
        {
          text: 'Mouse',
          value: 3,
          color: '#90EE90',
          fontColor: '#000'
        }
      ];
    }

    // Set the figure definition for readspeakers if it doesn't exist
    if (!self.params.figureDefinition) {
      self.params.figureDefinition = "Chart";
    }

    // Keep track of type.
    self.type = (self.params.graphMode === 'pieChart' ? 'Pie' : 'Bar');

    // Keep content Data
    self.contentData = contentData;
  }

  // Inheritance
  Chart.prototype = Object.create(EventDispatcher.prototype);
  Chart.prototype.constructor = Chart;

  /**
   * Make sure the data set has set the required text and value properties.
   *
   * @param {Array} dataSet
   */
  Chart.filterData = function (dataSet) {
    // Cycle through data set
    for (var i = 0; i < dataSet.length; i++) {
      var row = dataSet[i];
      if (row.text === undefined || row.value === undefined) {
        // Remove invalid data
        dataSet.splice(i, 1);
        i--;
        continue;
      }

      row.text = row.text.trim();
      row.value = parseFloat(row.value);
      if (row.text === '' || isNaN(row.value)) {
        // Remove invalid data
        dataSet.splice(i, 1);
        i--;
        continue;
      }
    }
  };

  /**
   * Append field to wrapper.
   *
   * @param {H5P.jQuery} $container
   */
  Chart.prototype.attach = function ($container) {
    var self = this;

    // Mark as consumed
    self.triggerConsumed();

    if(self.isRoot()) {
      // Mark as completed
      self.triggerCompleted();
    }

    // Create chart on first attach
    if (self.$wrapper === undefined) {
      self.$wrapper = $('<div/>', {
        'class': 'h5p-chart-chart h5p-chart-' + self.type.toLowerCase()
      });
      self.chart = new H5P.Chart[self.type + 'Chart'](self.params, self.$wrapper);
    }

    // Prepare container
    self.$container = $container.html('').addClass('h5p-chart').append(self.$wrapper);

    const $defgroup = $('<div/>', {
      'class': 'hidden-but-read',
      'aria-label': self.params.figureDefinition,
      'role': 'img' // Using img here since support for figure is non-existent (Will they know the difference?)
    });

    // Add aria-labels for the data
    self.params.listOfTypes.forEach(function(type) {
      var ariaLabel = $('<div/>', {
        'class': 'hidden-but-read',
        'html': type.text + ': ' + type.value + ''
      });
      $defgroup.append(ariaLabel);
    });

    self.$container.append($defgroup);

    // Handle resizing
    self.on('resize', function () {
      if (!self.$container.is(':visible')) {
        return; // Only handle if visible
      }
      // Resize existing chart
      self.chart.resize();
    });
  };

  /**
   * Trigger the 'consumed' xAPI event when this commences
   *
   * (Will be more sophisticated in future version)
   */
  Chart.prototype.triggerConsumed = function () {
    var xAPIEvent = this.createXAPIEventTemplate({
      id: 'http://activitystrea.ms/schema/1.0/consume',
      display: {
        'en-US': 'consumed'
      }
    });
    this.trigger(xAPIEvent);
  };

  /**
   * Trigger the 'completed' xAPI event when this commences
   *
   * (Will be more sophisticated in future version)
   */
  Chart.prototype.triggerCompleted = function () {
    var xAPIEvent = this.createXAPIEventTemplate('completed');
    xAPIEvent.data.statement.result = {
      'completion': true
    };
    this.trigger(xAPIEvent);
  };

  Chart.prototype.getTitle = function () {
    return H5P.createTitle(this.contentData && this.contentData.metadata && this.contentData.metadata.title ? this.contentData.metadata.title : 'Chart');
  };

  return Chart;
})(H5P.jQuery, H5P.EventDispatcher);
