H5PEditor.ImpressPresentationEditor = H5PEditor.ImpressPresentationEditor || {};

H5PEditor.ImpressPresentationEditor.OrderingMenu = function ($, JoubelUI) {

  function OrderingMenu (IPEditor) {


    /**
     * Ordering button bar menu
     */
    var $orderingButtonBar = $('<div>', {
      'class': 'h5p-buttonbar-sub-menu'
    });

    /**
     * Button for opening the button bar
     */
    var $button;

    var orderingTitle = H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'orderingMenu', {});

    /**
     * Route checkbox wrapper
     *
     * @type {jQuery} Route checkbox element
     */
    var $routeCheckbox = $('<div>', {
      'class': 'h5p-check-box'
    }).appendTo($orderingButtonBar);

    /**
     * Label for include in path checkbox
     */
    var $includeInPathLabel = $('<label>', {
      'text': H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'include', {})
    }).appendTo($routeCheckbox);

    /**
     * Include in path checkbox
     */
    var $includeInPathCheckbox = $('<input>', {
      'type': 'checkbox',
      'checked': 'checked'
    }).click(function (e) {
      var step = IPEditor.IP.getStep(IPEditor.getEditingStep());
      var checked = $(this).is(':checked');

      if (checked) {
        IPEditor.IP.addToRoute(step.getId());
      }
      else {
        var removed = IPEditor.removeFromRoute(step.getId());

        // Did not remove
        if (!removed) {
          e.preventDefault();
          return false;
        }
      }
      step.setRouteState(checked);
      IPEditor.IP.updateRoute();
      IPEditor.IP.refocusView();
    }).prependTo($includeInPathLabel);

    /**
     * Done editing step ordering, remove form.
     */
    var doneStepOrdering = function () {
      // Recreate route
      IPEditor.IP.route = [];

      // Update route with new order
      var $routeElements = $routeList.children();
      $routeElements.each(function () {
        var stepName = $(this).html();
        var i;
        for (i = 0; i < IPEditor.IP.steps.length; i++) {
          var step = IPEditor.IP.steps[i];
          if (step.getName() === stepName) {
            IPEditor.IP.route.push('#' + H5P.ImpressPresentation.ID_PREFIX + step.getId());
            break;
          }
        }
      });

      IPEditor.IP.updateRoute();

      // Hide library form
      $routeListDialog.detach();
      IPEditor.stepDialog.hide();

      // Show jmpress
      IPEditor.IP.$jmpress.removeClass('hide');

      IPEditor.IP.refocusView();
    };

    /**
     * Set new route list
     *
     * @param {Array} array
     */
    var updateRouteList = function (array) {
      $routeList.children().remove();
      var route = array;

      // Only 1 item
      if (array[0] === array[1]) {
        route = array.splice(1, 1);
      }

      if (route && route.length) {
        var i;
        for (i = 0; i < route.length; i++) {

          // Add list element
          var stepId = IPEditor.getUniqueId(IPEditor.IP.$jmpress.find((route[i])));
          var step = IPEditor.IP.getStep(stepId);
          $('<li>', {
            'class': 'h5p-route-list-element',
            'html': step.getName()
          }).hover(function () {
            $(this).addClass('hover');
          }, function () {
            $(this).removeClass('hover');
          }).appendTo($routeList);
        }
      }
    };


    /**
     * Button for opening route sorting menu
     */
    JoubelUI.createButton({
      'class': 'h5p-bottom-button',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'orderSteps', {})
    }).click(function () {
      updateRouteList(IPEditor.IP.route);

      // Hide jmpress
      IPEditor.IP.$jmpress.addClass('hide');

      // Show library form and set dialog done callback
      IPEditor.stepDialog.append($routeListDialog)
        .show()
        .setDialogDoneCallback(doneStepOrdering);

    }).appendTo($orderingButtonBar);

    /**
     * Route list dialog
     *
     * @type {jQuery}
     */
    var $routeListDialog = $('<div>', {
      'class': 'h5p-route-list-dialog'
    });

    /**
     * Help text for route list dialog
     */
    $('<div>', {
      'class': 'h5p-route-list-help-text',
      'html': H5PEditor.t('H5PEditor.ImpressPresentationEditor', 'routeListText', {})
    }).appendTo($routeListDialog);

    /**
     * List of the complete route
     */
    var $routeList = $('<ul>', {
      'class': 'h5p-route-list'
    }).appendTo($routeListDialog);

    // Create sortable from route list
    Sortable.create($routeList.get(0));

    this.createButton = function (clickCallback) {
      $button = JoubelUI.createButton({
        'class': 'h5p-main-menu-button h5p-ordering-menu-button',
        'title': orderingTitle
      }).click(function () {
        if (clickCallback) {
          clickCallback();
        }
        $button.addClass('active');
        $orderingButtonBar.addClass('show');
        IPEditor.IP.refocusView();
      });

      return $button;
    };

    /**
     * Append ordering button bar to element
     *
     * @param {jQuery} $wrapper
     */
    this.appendTo = function ($wrapper) {
      $orderingButtonBar.appendTo($wrapper);
    };

    this.hide = function () {
      $button.removeClass('active');
      $orderingButtonBar.removeClass('show');
    };

    /**
     * Get ordering button bar element
     *
     * @returns {jQuery}
     */
    this.getElement = function () {
      return $orderingButtonBar;
    };

    /**
     * Update route checkbox with step params
     *
     * @param {H5P.ImpressPresentation.Step} step
     */
    this.updateRouteCheckbox = function (step) {
      $includeInPathCheckbox.prop('checked', step.getRouteState());
    };


  }

  return OrderingMenu;
}(H5P.jQuery, H5P.JoubelUI);
