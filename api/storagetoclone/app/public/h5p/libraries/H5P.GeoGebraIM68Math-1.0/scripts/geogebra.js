var H5P = H5P || {};

H5P.GeoGebraIM68Math = (function ($, UI) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    // this.options = $.extend(true, {}, {
    //     title: 'GeoGebra Graphing',
    // }, options);

    // Keep provided id.
    this.options = options;
    this.id = id;
    this.uniq_id = Date.now() + Math.floor(Math.random() * 1000);
    this.ggb_element = "ggb-element-" + this.uniq_id;
    this.ggb_applet = "ggbApplet_" + this.uniq_id;
    this.ggbApp = [];
    this.registerDOMElements();
  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    // Set ID on container to identify it as a ggb element
    // container.  Allows for styling later.
    this.$container = $container

    // appends the all other containers to master container of library
    /* this.$saveButton.appendTo(this.$buttonContainer);
     this.$buttonContainer.appendTo(this.$libraryArea);*/ //save button is not needed for now - might be needed in future release
    this.$libraryArea.appendTo(this.$container);

    // appends the applet area to main container
    this.$ggbArea.appendTo(this.$container);

    this.initializeGeoGabra();
  }

  /**
   * Create GeoGebra Applet
   */
  C.prototype.initializeGeoGabra = function () {
    let base64Val = this.options.geogebra_applet_math;

    this.ggbApp = new GGBApplet({
      "material_id": this.options.geogebra_unit_material,
      "id": this.ggb_applet,
      "ggbBase64": (! base64Val ? "" : base64Val)
    }, true);

    this.activityData().then(value => {
      if (base64Val){
        console.log("Base64 String Value already set for this activity...");
        // this.loadActivityData(base64Val);
      }
    });
  }

  /**
   * Inject the Applet when element becomes available
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
      if (time > 4000) {
        this.reInjectApplet();
        time = 0;
      }
    }
  }

  /**
   * Load activity data from base64 string
   */
  C.prototype.loadActivityData = function (base64Val) {
    window[this.ggb_applet].setBase64(base64Val);
  }


  /**
   * Re-Inject the applet into ggb-element
   */
  C.prototype.reInjectApplet = function () {
    if (!$("#" + this.ggb_element).find("article div").length) {
      this.ggbApp.inject(this.ggb_element);
    }
  }


  /**
   * registerDOMElements.
   */
  C.prototype.registerDOMElements = function () {
    const that = this;
    this.$libraryArea = $('<div />', {
      class: 'h5p-library-area',
      html: '<h2 class="applet-title">' + this.options.geogebra_unit_title + '</h2>'
    });

    this.$ggbArea = $('<div />', {
      id: that.ggb_element,
      css: {
        'min-height': '600px',
      },
    });

    this.$saveButton = this.createButton('save', 'save', ' Save', that.saveActivity);

    this.$buttonContainer = $('<div class="button-container" />');
  };

  /**
   * createButton - creating all buttons used in this game.
   * @param {string} name Buttonname - TITLe.
   * @param {string} icon Fa icon name.
   * @param {string} param Button text parameter.
   * @param {function} callback Callback function.
   * @return {H5P.JoubelUI.Button} Joubel ui button object.
   */
  C.prototype.createButton = function (name, icon, param, callback) {
    const cFunction = callback.bind(this);
    return UI.createButton({
      title: name,
      click: cFunction,
      html: '<span><i class="fa fa-' + icon + '" aria-hidden="true"></i></span>' + param
    });
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

  /**
   * saveActivity - Save the modified data of the activity.
   */
  C.prototype.saveActivity = function () {
  };
  return C;
})
(H5P.jQuery, H5P.JoubelUI);
