var H5PEditor = H5PEditor || {};

/**
 * Applet Editor widget module
 *
 * @param {H5P.jQuery} $
 */
H5PEditor.widgets.GeoGebraIM68Math = H5PEditor.GeoGebraIM68Math = (function ($) {

  /**
   * Creates color selector.
   *
   * @class H5PEditor.GeoGebraIM68Math
   *
   * @param {Object} parent
   * @param {Object} field
   * @param {string} params
   * @param {H5PEditor.SetParameters} setValue
   */
  function C(parent, field, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
    this.materialField = parent.children.find(element => element.field.name === "geogebra_unit_material");

    this.uniq_id = Date.now() + Math.floor(Math.random() * 1000);
    this.ggb_element = "ggb-element-" + this.uniq_id;
    this.ggb_applet = "ggbApplet_" + this.uniq_id;
    this.orgMaterialID = this.getMaterialID();
    this.ggbApp = [];
  }

  /**
   * Append the field to the wrapper.
   *
   * @param {H5P.jQuery} $wrapper
   */
  C.prototype.appendTo = function ($wrapper) {
    var self = this;

    self.$container = $('<div>', {
      'class': 'field text h5p-classic-applet'
    });

    // Add header:
    $('<span>', {
      'class': 'h5peditor-label',
      html: self.field.label
    }).appendTo(self.$container);

    // Add description:
    $('<span>', {
      'class': 'h5peditor-field-description',
      'id': self.ggb_element,
      html: self.field.description
    }).appendTo(self.$container);

    self.$container.appendTo($wrapper);

    // this.materialField.$input[0].onchange = function(){
    this.materialField.change(function () {
      self.initializeGeoGabra();
    });
  };

  /**
   * Create GeoGebra Applet
   */
  C.prototype.initializeGeoGabra = function () {
    // console.log(this.materialField.$input[0].value);
    var materialID = this.getMaterialID();

    if (!materialID) {
      console.log("Material ID not found!");
      return false;
    }
    document.getElementById(this.ggb_element).innerHTML = "";
    this.ggbApp = new GGBApplet({
      "material_id": materialID,
      "id": this.ggb_applet,
      "showToolBar": true,
      "useBrowserForJS": false,
      "showAlgebraInput": true,
      "ggbBase64": ((this.params && (this.orgMaterialID === materialID)) ? this.params : "")
    }, true);

    this.activityData().then(value => {
      // if (this.params){
      //   this.loadActivityData();
      // }
      this.setActivityData();
    });
  }

  /**
   * Set and load activity data
   */
  C.prototype.activityData = async function () {
    let time = 0;

    // wait until ggb applet element available
    while (! document.getElementById(this.ggb_element)) {
      await this.delay(50);
    }

    // inject the applet data
    this.reInjectApplet();

    // wait until ggb applet becomes available
    while (!window[this.ggb_applet] || typeof window[this.ggb_applet].setBase64 !== "function") {
      await this.delay(500);
      time += 500;
      if (time > 3000) {
        this.reInjectApplet();
        time = 0;
      }
    }
  }

  /**
   * Load activity data from base64 string
   */
  C.prototype.loadActivityData = async function () {
    window[this.ggb_applet].setBase64(this.params);
  }

  /**
   * Set activity data from base64 string to field
   */
  C.prototype.setActivityData = function () {
    const that = this;
    setInterval( function () {
      that.setWidget(window[that.ggb_applet].getBase64());
    }, 500);
  }

  /**
   * Re-Inject the applet into ggb-element
   */
  C.prototype.reInjectApplet = function () {
    if (! $("#" + this.ggb_element).find("article div").length) {
      this.ggbApp.inject(this.ggb_element);
    }
  }

  /**
   * Set widget base64 encoded value
   * @param val
   */
  C.prototype.setWidget = function (val) {
    // this.params = val;
    this.setValue(this.field, val);
  };

  /**
   * Get materialID value
   */
  C.prototype.getMaterialID = function () {
    return this.materialField.value;
  };

  /**
   * Validate the current values.
   *
   * @returns {boolean}
   */
  C.prototype.validate = function () {
  };

  /**
   * Remove the current field
   */
  C.prototype.remove = function () {
  };

  /**
   * Create delay for ms
   * @param ms
   * @returns {Promise<unknown>}
   */
  C.prototype.delay = function (ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, ms);
    });
  }

  return C;
})(H5P.jQuery);
