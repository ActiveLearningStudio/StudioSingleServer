H5PEditor.Conditional = (function () {

  function Conditional(parent, field, params, setValue) {
    // Default params
    params = params || {};

    // Outsource readies
    this.passReadies = true;

    var wrapperElement = document.createElement('div');
    var booleanElement = document.createElement('div');
    var conditionalElement = document.createElement('div');
    conditionalElement.classList.add('h5peditor-conditional-toggleable');

    // Process boolean
    //TODO: Should extend field, then remove widget and fields.
    var semantics = [
      {
        name: field.name,
        type: field.type,
        label: field.label
      }
    ];
    setValue(field, params);

    H5PEditor.processSemanticsChunk(semantics, params, H5PEditor.$(booleanElement), this);

    // Process semantics chunk
    H5PEditor.processSemanticsChunk(field.fields, params, H5PEditor.$(conditionalElement), this);

    var checkbox = booleanElement.querySelector('input');
    checkbox.addEventListener('click', function () {
      conditionalElement.classList.toggle('hide');
    });

    if (!params.inputAlternative) {
      conditionalElement.classList.add('hide');
    }

    wrapperElement.appendChild(booleanElement);
    wrapperElement.appendChild(conditionalElement);

    this.appendTo = function ($wrapper) {
      $wrapper.get(0).appendChild(wrapperElement);
    };

    /**
     * Always validate
     * @return {boolean}
     */
    this.validate = function () {
      return true;
    };
  }

  return Conditional;
})();

// Register widget
H5PEditor.widgets.conditional = H5PEditor.Conditional;
