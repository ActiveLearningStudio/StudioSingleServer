var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {object} params Options for this library.
 * @param {int} id Content identifier
 * @param {object} contentData content data
 */
H5P.Table = function (params, id, contentData) {
  this.text = params.text === undefined ? '<table class="h5p-table"><thead><tr><th scope="col">Heading Column 1</th><th scope="col">Heading Column 2</th></tr></thead><tbody><tr><td>Row 1 Col 1</td><td>Row 1 Col 2</td></tr><tr><td>Row 2 Col 1</td><td>Row 2 Col 2</td></tr></tbody></table>' : params.text;
  this.contentData = contentData;
  if(contentData.metadata && contentData.metadata.title) {
    this.title = contentData.metadata.title
  }
};

/**
 * Wipe out the content of the wrapper and put our HTML in it.
 *
 * @param {jQuery} $wrapper
 */
H5P.Table.prototype.attach = function ($wrapper) {
  $wrapper.addClass('h5p-table').html(this.text);
  this.handleXAPI();
};


/**
 * trigger XAPI based on activity if activity is CP then trigger after slide consumed else trigger on attach
 */
H5P.Table.prototype.handleXAPI = function () {
  // for CP trigger only on slide open for others trigger on attach
  if (this.contentData.hasOwnProperty("parent") && this.contentData.parent.hasOwnProperty("presentation")) {
    this.on('trigger-consumed', function () {
      this.triggerConsumed();
    });
  } else {
    this.triggerConsumed();
  }
};



/**
 * Trigger the 'consumed' xAPI event when this commences
 *
 */
H5P.Table.prototype.triggerConsumed = function () {
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
      'en-US': this.title
    }
  });

  this.trigger(xAPIEvent);
};
