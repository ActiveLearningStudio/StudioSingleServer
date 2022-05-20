H5P.GlossaryList = (function (EventDispatcher, React, ReactDOM) {

  /**
   * Glossary List Constructor
   *
   * @class
   * @param {Object} params Describes task behavior
   * @param {number} id Content identifier
   * @param {Object} data User specific data to adapt behavior
   */
  function GlossaryList(params, id, data) {
    var self = this;

    // Initialize event inheritance
    EventDispatcher.call(self);

    /**
     * Attach the glossary list to the given container
     *
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      ReactDOM.render(
        React.createElement(H5P.GlossaryList.List, {
          words: [{from: 'Ocean', to: 'Hav'},{from: 'Boat', to: 'B&aring;t'}]
        }),
        $container.get(0)
      );
    };
  }

  // Extends the event dispatcher
  GlossaryList.prototype = Object.create(EventDispatcher.prototype);
  GlossaryList.prototype.constructor = GlossaryList;

  /* @private */
  var idCount = -1;

  /**
   * Generates unique IDs for Glossary List Components
   */
  GlossaryList.unqiueId = function () {
    idCount++;
    return 'h5p-glossary-list-' + idCount;
  };

  return GlossaryList;
})(H5P.EventDispatcher, H5P.React, H5P.ReactDOM);
