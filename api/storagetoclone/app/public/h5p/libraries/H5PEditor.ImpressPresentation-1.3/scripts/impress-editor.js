/* global ns */
/**
 * Interactive Video editor widget module
 *
 * @param {jQuery} $
 * @param {H5P.JoubelUI} JoubelUI
 * @param {H5PEditor.ImpressPresentationEditor.MainMenu} MainMenu
 * @param {H5PEditor.ImpressPresentationEditor.FreeTransform} FreeTransform
 * @param {H5PEditor.ImpressPresentationEditor.CoreMenu} CoreMenu
 * @param {H5PEditor.ImpressPresentationEditor.OrderingMenu} OrderingMenu
 * @param {H5PEditor.ImpressPresentationEditor.TransformMenu} TransformMenu
 * @param {H5PEditor.ImpressPresentationEditor.StepDialog} StepDialog
 */
H5PEditor.widgets.impressPresentationEditor =
H5PEditor.ImpressPresentationEditor =
(function ($, JoubelUI, MainMenu, FreeTransform, CoreMenu, OrderingMenu,
  TransformMenu, StepDialog, EditingStep, ActiveStep, ModeDisplay,
  StepPreviewList, OverviewStep, NumericStepInput) {

  /**
   * Initialize interactive video editor.
   *
   * @returns {ImpressPresentationEditor}
   */
  function ImpressPresentationEditor(parent, field, params, setValue) {
    var self = this;

    self.defaults = {
      action: {},
      backgroundGroup: {
        transparentBackground: true,
        backgroundColor: '#fff',
        backgroundWidth: 640,
        backgroundHeight: 360
      },
      positioning: {
        centerText: true,
        y: 0,
        x: 0,
        z: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        absoluteRotation: 0
      },
      ordering: {
        includeInPath: true
      }
    };

    // Set default params
    if (params === undefined) {
      params = {
        perspectiveRatio: 1,
        views: [
          self.defaults
        ]
      };
      setValue(field, params);

      self.emptyParams = true;
    }

    self.parent = parent;
    self.field = field;
    self.setValue = setValue;
    self.params = params;
    self.editModes = {
      move: false,
      rotate: false,
      transform: false
    };

    /**
     * Editing slide index
     *
     * @type {number}
     */
    self.editingStepId = 0;

    /**
     * Keeps track of semantic fields for parameters
     *
     * @type {void|*}
     */
    self.semanticsList = $.extend(true, [], self.field.fields[0].field);

    /**
     * Editor wrapper
     *
     * @type {jQuery}
     */
    self.$wrapper = $(
      '<div class="impress-editor-wrapper">' +
        '<div class="impress-presentation-preview"></div>' +
      '</div>'
    );

    /**
     * Preview container
     *
     * @type {jQuery}
     */
    self.$preview = $('.impress-presentation-preview', self.$wrapper);

    /**
     * Step dialog
     *
     * @type {H5PEditor.ImpressPresentationEditor.StepDialog}
     */
    self.stepDialog = new StepDialog().appendTo(self.$wrapper);

    // Make sure widget can pass readies (used when processing semantics)
    self.passReadies = true;
    self.parent.ready(function () {
      self.passReadies = false;
    });

    // Live preview step selector
    self.stepPreviewList = new StepPreviewList(false).appendTo(self.$preview);

    // Numeric step input menu
    self.numericStepInput = new NumericStepInput().appendTo(self.$preview);
    self.numericStepInput.on('inputChanged', function (e) {
      self.updateEditingStep(e.data.property, e.data.value);
    });

    // Ordering Menu
    self.orderingMenu = new OrderingMenu(self);

    self.overviewStep = new OverviewStep(self);
    self.activeStep = new ActiveStep(self);
    self.editingStep = new EditingStep(self);

    self.modeDisplay = new ModeDisplay(self);

    self.resize();

    // Create preview
    self.createPreview();
    self.overviewStep.updateDefaultViewport();

    // Create example content if no params
    if (self.emptyParams) {
      var firstStep = self.IP.getStep(0);
      firstStep.createExampleContent(self.field.fields[0].field.fields[0].options)
        .setName(H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'step', {}) + ' ' + firstStep.getId());
      self.updateActiveStepDisplay(firstStep.getName());
      self.params.views[0] = self.IP.getStep(0).getParams();
    }

    // Enable free transform of steps
    self.freeTransform = new FreeTransform(self.IP, self);

    // Core Menu
    self.coreMenu = new CoreMenu(self.IP, self);

    // Transform Menu
    self.transformMenu = new TransformMenu(self, self.IP);

    /**
     * Create main menu and attach it to editor wrapper
     */
    self.mainMenu = new MainMenu(self)
      .appendTo(self.$wrapper);


    setTimeout(function () {
      self.stepPreviewList.resize()
        .toggleDynamicResizing();
    }, 300);

    self.stepPreviewList.on('selectedStep', function (e) {
      self.IP.goToStep(e.data);
    });

    self.freeTransform.on('mouseUp', function (e) {
      self.stepPreviewList.addStep(e.data);
    });

  }

  ImpressPresentationEditor.prototype.createStep = function (params, options) {
    return this.IP.createStep(params, options);
  };

  /**
   * Update editing step
   *
   * @param {string} prop Step params property
   * @param {number} value Property value
   * @returns {H5PEditor.ImpressPresentationEditor}
   */
  ImpressPresentationEditor.prototype.updateEditingStep = function (prop, value) {
    var step = this.IP.getStep(this.getEditingStep());
    step.updateStepProp(prop, value);
    this.updateStep(step.getId());
    this.reselectStep();

    return this;
  };

  /**
   * Create preview of Impressive Presentation
   */
  ImpressPresentationEditor.prototype.createPreview = function () {
    var self = this;
    self.IP = new H5P.ImpressPresentation({viewsGroup: self.params}, H5PEditor.contentId, {disableNavLine: true});

    // Reference IP params to only update params one place
    self.params.views = self.IP.params.viewsGroup.views;

    self.IP.on('createdStep', function (e) {
      var step = e.data;
      step.disableContentInteraction();
      self.addStepToSelector(step);

      // Listen for library (re)creation in Step
      step.on('createdLibraryElement', function () {
        step.disableContentInteraction();
        self.stepPreviewList.addStep(step);
      });

      step.on('changedBackground', function () {
        self.stepPreviewList.addStep(step);
      });

      self.registerEnterStepListener(step);
      self.stepPreviewList.addStep(step);
    });

    self.IP.attach(self.$preview);
    self.activeStep.setActiveStepDisplay(this.IP.getStep(this.getUniqueId(this.IP.$jmpress.jmpress('active'))));
    self.setEditingStep();
  };

  /**
   * Remove step
   *
   * @param {Object} [options]
   * @param {number} [options.stepId]
   * @param {H5P.ImpressPresentation.Step} [options.goToStep]
   * @param {boolean} [options.skipConfirmation]
   */
  ImpressPresentationEditor.prototype.removeStep = function (options) {
    options = options || {};
    var editingStepId = options.stepId || this.getEditingStep();

    // Too few steps
    if (this.IP.getStepCount() <= 1) {
      this.IP.createErrorMessage(H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'removeStepError', {}));
      return;
    }

    if (options.skipConfirmation || confirm(H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'removeStep', {}))) {
      var editingStep = this.IP.getStep(editingStepId);
      var activeStepID = this.getUniqueId(this.IP.$jmpress.jmpress('active'));

      editingStep.removeStep(this.IP.$jmpress);
      this.IP.removeStep(editingStepId);
      this.removeStepFromSelector(editingStep);
      this.stepPreviewList.removeStep(editingStep);

      // Move to previous step if on the deleted step
      if (options.goToStep) {
        this.IP.goToStep(options.goToStep);
      }
      else {
        if (activeStepID === editingStepId) {
          this.IP.$jmpress.jmpress('prev');
        }
      }
    }
  };

  /**
   * Remove step from selector
   *
   * @param {H5P.ImpressPresentation.Step} step Step to be removed
   */
  ImpressPresentationEditor.prototype.removeStepFromSelector = function (step) {
    this.editingStep.removeStep(step);
  };

  /**
   * Set perspective ratio of impressive presentation relative to preview width
   */
  ImpressPresentationEditor.prototype.setPerspectiveRatio = function () {
    var self = this;
    self.params.perspectiveRatio = self.$preview.width() / 1000;
    self.IP.params.viewsGroup.perspectiveRatio = self.params.perspectiveRatio;
    self.IP.resize();
  };

  /**
   * Append preview to container
   * @param {$} $wrapper
   */
  ImpressPresentationEditor.prototype.appendTo = function ($wrapper) {
    var self = this;
    self.createSemantics();
    self.$wrapper.appendTo($wrapper);
    self.setPerspectiveRatio();

    self.resize();
  };

  /**
   * Remove step from route
   *
   * @param {Number} stepId
   * @returns {Boolean} True if step was removed from route
   */
  ImpressPresentationEditor.prototype.removeFromRoute = function (stepId) {
    var self = this;

    // Route must have at least one step
    if (self.IP.getRoute().length <= 1) {
      self.IP.createErrorMessage(H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'removeFromPathError', {}));
      return false;
    }

    self.IP.removeFromRoute(stepId);
    return true;
  };

  ImpressPresentationEditor.prototype.updateActiveStepDisplay = function (newName) {
    var self = this;
    var $activeStep = self.IP.$jmpress.jmpress('active');
    var activeStepId = self.getUniqueId($activeStep);
    var activeStep = self.IP.getStep(activeStepId);
    activeStep.setName(newName);
    self.updateStepInSelector(activeStep);
    self.activeStep.setActiveStepDisplay(activeStep);
    self.stepPreviewList.updateTitle(activeStep);

    return this;
  };

  /**
   * Update step name in selector.
   * @param {H5P.ImpressPresentation.Step} step
   */
  ImpressPresentationEditor.prototype.updateStepInSelector = function (step) {
    this.editingStep.updateStepName(step);
  };

  /**
   * Add step to selector
   * @param {H5P.ImpressPresentation.Step} step
   */
  ImpressPresentationEditor.prototype.addStepToSelector = function (step) {
    var self = this;

    var idx = step.getId();
    var $option = $('<option>', {
      value: idx
    }).text(step.getName());

    self.editingStep.addStepOption($option);
  };

  /**
   * Register listener for when entering steps
   * @param {H5P.ImpressPresentation.Step} step
   */
  ImpressPresentationEditor.prototype.registerEnterStepListener = function (step) {
    var self = this;
    var $step = step.getElement();
    $step.on('enterStep', function () {
      if (self.activeStep) {
        self.activeStep.setActiveStepDisplay(step);
        self.setEditingStep(step);
      }
    });
  };

  /**
   * Collect functions to execute once the tree is complete.
   *
   * @param {function} ready
   * @returns {undefined}
   */
  ImpressPresentationEditor.prototype.ready = function (ready) {
    var self = this;
    if (self.passReadies) {
      self.parent.ready(ready);
    }
    else {
      self.readies.push(ready);
    }
  };

  /**
   * Update semantics.
   */
  ImpressPresentationEditor.prototype.updateSemantics = function () {
    var self = this;
    self.createSemantics();
  };

  /**
   * Create semantics.
   */
  ImpressPresentationEditor.prototype.createSemantics = function () {
    var self = this;

    // semantics holder
    self.IP.steps.forEach(function (step) {
      self.createLibrarySemantics(step);
      self.createBackgroundSemantics(step);
    });
  };

  /**
   * Create background semantics
   * @param {H5P.ImpressPresentation.Step} step
   */
  ImpressPresentationEditor.prototype.createBackgroundSemantics = function (step) {
    var self = this;
    var $libraryInstance = $('<div>', {
      'class': 'h5p-semantics-instance'
    });

    H5PEditor.processSemanticsChunk(self.semanticsList.fields[2].fields, step.getParams().backgroundGroup, $libraryInstance, self);

    // Find transparency checkbox
    var transparentBackground;
    self.children.forEach(function (child) {
      if (child.field && child.field.name === 'transparentBackground') {
        transparentBackground = child;
      }
    });

    // Uncheck transparency on color or image change
    self.children.forEach(function (child) {
      if (child instanceof H5PEditor.ColorSelector) {
        child.$colorPicker.on('change.spectrum', function () {
          transparentBackground.$input.attr('checked', false);
          transparentBackground.$input.change();
        });
      }
      else if (child instanceof ns.File) {
        child.changes.push(function () {
          transparentBackground.$input.attr('checked', false);
          transparentBackground.$input.change();
        });
      }
    });

    step.setBackgroundForm($libraryInstance);

    // Store children on step
    step.children = step.children.concat(self.children);
    self.children = undefined;

    return this;
  };

  /**
   * Create library semantics
   * @param {H5P.ImpressPresentation.Step} step
   */
  ImpressPresentationEditor.prototype.createLibrarySemantics = function (step) {
    var self = this;
    var $libraryInstance = self.createSemanticsFields('action', step, self.semanticsList.fields);

    step.setLibraryForm($libraryInstance);

    // Store children on step
    if (!step.children.length) {
      step.children = [];
    }
    step.children = step.children.concat(self.children);
    self.children = undefined;

    return this;
  };

  /**
   * Create semantic fields for step.
   * @param {String} property semantics property
   * @param {Object} step parameters for step containing property
   * @param {Object} semanticsList semantic field list containing property
   */
  ImpressPresentationEditor.prototype.createSemanticsFields = function (property, step, semanticsList) {
    var self = this;
    var actionField = findPropertyField(property, semanticsList);

    var $semanticsInstance = $('<div>', {
      'class': 'h5p-semantics-instance'
    });

    // Only process semantics field if found
    if (actionField.length) {
      H5PEditor.processSemanticsChunk(actionField, step.getParams(), $semanticsInstance, self);
    }

    return $semanticsInstance;
  };

  /**
   * Resize area used for Impressive Presentation preview
   */
  ImpressPresentationEditor.prototype.resize = function () {
    var self = this;
    var containerWidth = self.$preview.width();
    var containerHeight = (containerWidth * 9) / 16;

    // Set container height, width already 100%
    self.$preview.height(containerHeight);
    if (self.IP) {
      H5P.trigger(self.IP, 'resize');
    }
  };

  /**
   * Get unique id of step
   *
   * @param {jQuery} $step
   * @returns {Number}
   */
  ImpressPresentationEditor.prototype.getUniqueId = function ($step) {
    var stepId = $step.attr('id');
    var id = stepId.split(H5P.ImpressPresentation.ID_PREFIX);
    return parseInt(id[1]);
  };

  /**
   * Get current editing step id
   *
   * @returns {number} Id of editing step
   */
  ImpressPresentationEditor.prototype.getEditingStep = function () {
    return this.editingStepId;
  };

  /**
   * Set editing step
   *
   * @param [step]
   */
  ImpressPresentationEditor.prototype.setEditingStep = function (step) {
    step = step || this.IP.getStep(this.getUniqueId(this.IP.$jmpress.jmpress('active')));
    this.editingStep.updateEditingStep(step);

    return this;
  };

  /**
   * Toggle editor mode.
   * @returns {Boolean} Returns new state of mode
   */
  ImpressPresentationEditor.prototype.toggleMode = function (mode) {
    var self = this;
    if (self.editModes[mode]) {
      self.disableMode(mode);
    }
    else {
      self.enableMode(mode);
    }

    return self.editModes[mode];
  };

  /**
   * Enable free transform mode. Disables click navigation.
   */
  ImpressPresentationEditor.prototype.enableMode = function (mode) {
    var self = this;

    // Disable all modes before enabling new mode
    self.disableAllModes();
    var settings = self.IP.$jmpress.jmpress('settings');
    settings.mouse.clickSelects = false;
    self.editModes[mode] = true;
    self.modeDisplay.setText(H5PEditor.t('H5PEditor.ImpressPresentationEditor', mode, {}))
      .show();
  };

  /**
   * Disable free transform mode.
   */
  ImpressPresentationEditor.prototype.disableMode = function (mode) {
    var self = this;
    self.editModes[mode] = false;
    var settings = self.IP.$jmpress.jmpress('settings');
    settings.mouse.clickSelects = true;
    self.modeDisplay.hide();
  };

  /**
   * Disable all free transform modes
   */
  ImpressPresentationEditor.prototype.disableAllModes = function () {
    var self = this;

    for (var mode in self.editModes) {
      if (self.editModes.hasOwnProperty(mode)) {
        self.editModes[mode] = false;
      }
    }
    self.modeDisplay.hide();
    var settings = self.IP.$jmpress.jmpress('settings');
    settings.mouse.clickSelects = true;
  };

  /**
   * Reselct current step, needed for some steps to update.
   */
  ImpressPresentationEditor.prototype.reselectStep = function () {
    var self = this;
    var $activeSlide = self.IP.$jmpress.jmpress('active');
    var activeSlideId = self.getUniqueId($activeSlide);
    if (self.editingStepId === activeSlideId) {
      self.IP.$jmpress.jmpress('select', $activeSlide, 'resize');
    }
  };

  /**
   * Update step by reapplying styles
   * @param {Number} [id]
   */
  ImpressPresentationEditor.prototype.updateStep = function (id) {
    var self = this;
    var $updateStep;
    if (id !== undefined) {
      var step = self.IP.getStep(id);
      $updateStep = step.getElement();
    }
    else {
      $updateStep = self.IP.$jmpress.jmpress('active');
    }

    self.IP.$jmpress.jmpress('reapply', $updateStep);
    self.numericStepInput.setStep();
  };

  ImpressPresentationEditor.prototype.remove = function () {

  };

  /**
   * Validate content
   *
   * @returns {boolean} True, always valid
   */
  ImpressPresentationEditor.prototype.validate = function () {
    // Register route in semantics
    this.params.route = this.IP.route;

    // Always valid
    return true;
  };


  /**
   * Get current viewport settings
   *
   * @returns {{height: {number}, width: {number}}}
   */
  ImpressPresentationEditor.prototype.getViewport = function () {
    var viewportSettings = this.IP.$jmpress.jmpress('settings').viewPort;
    return {height: viewportSettings.height, width: viewportSettings.width};
  };

  /**
   * Set viewport
   *
   * @param {Object} viewport
   * @param {number} viewport.height
   * @param {number} viewport.width
   */
  ImpressPresentationEditor.prototype.setViewport = function (viewport) {
    var viewportSettings = this.IP.$jmpress.jmpress('settings').viewPort;
    viewportSettings.height = viewport.height;
    viewportSettings.width = viewport.width;
  };

  /**
   * Refocus view.
   */
  ImpressPresentationEditor.prototype.refocusView = function () {
    this.IP.refocusView();
  };

  /**
   * Refresh view
   */
  ImpressPresentationEditor.prototype.refreshView = function () {
    this.IP.$jmpress.jmpress('reselect');
  };

  /**
   * Find property field
   *
   * @param property
   * @param semanticsList
   *
   * @returns {Array}
   */
  var findPropertyField = function (property, semanticsList) {
    var actionField = [];

    semanticsList.forEach(function (semanticField) {
      if (semanticField.name === property) {
        actionField.push(semanticField);
      }
    });

    return actionField;
  };

  ImpressPresentationEditor.MOVE = 'move';
  ImpressPresentationEditor.ROTATE = 'rotate';
  ImpressPresentationEditor.TRANSFORM = 'transform';

  return ImpressPresentationEditor;

}(H5P.jQuery,
  H5P.JoubelUI,
  H5PEditor.ImpressPresentationEditor.MainMenu,
  H5PEditor.ImpressPresentationEditor.FreeTransform,
  H5PEditor.ImpressPresentationEditor.CoreMenu,
  H5PEditor.ImpressPresentationEditor.OrderingMenu,
  H5PEditor.ImpressPresentationEditor.TransformMenu,
  H5PEditor.ImpressPresentationEditor.StepDialog,
  H5PEditor.ImpressPresentationEditor.EditingStep,
  H5PEditor.ImpressPresentationEditor.ActiveStep,
  H5PEditor.ImpressPresentationEditor.ModeDisplay,
  H5PEditor.ImpressPresentationEditor.StepPreviewList,
  H5PEditor.ImpressPresentationEditor.OverviewStep,
  H5PEditor.ImpressPresentationEditor.NumericStepInput
));
