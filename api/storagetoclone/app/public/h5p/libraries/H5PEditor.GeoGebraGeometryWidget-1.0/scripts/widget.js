var H5PEditor = H5PEditor || {};
/**
 * Applet Editor widget module
 *
 * @param {H5P.jQuery} $
 */
H5PEditor.widgets.GeoGebraGeometryWidget = H5PEditor.GeoGebraGeometryWidget = (function ($) {


  /**
   * Creates color selector.
   *
   * @class H5PEditor.GeoGebraGeometryWidget
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
    this.uniq_id = Date.now() + Math.floor(Math.random() * 1000);
    this.ggb_element = "ggb-element-" + this.uniq_id;
    this.ggb_applet = "ggbApplet_" + this.uniq_id;
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
    self.initializeGeoGabra();
  };

  /**
   * Create GeoGebra Applet
   */
  C.prototype.initializeGeoGabra = function () {
    this.ggbApp = new GGBApplet({
      "appName": "geometry",
      "width": 800,
      "height": 600,
      "showToolBar": true,
      "showAlgebraInput": true,
      "showMenuBar": false,
      "useBrowserForJS": false,
      "id": this.ggb_applet
    }, true);

    this.activityData().then(value => {
      if (this.params){
        this.loadActivityData();
      }
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
  C.prototype.loadActivityData = function () {
    window[this.ggb_applet].setBase64(this.params);
  }

  /**
   * Set activity data from base64 string to field
   */
  C.prototype.setActivityData = function () {
    const that = this;
    setInterval(function () {
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
