sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel'],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   */
  function (Controller, JSONModel) {
    return Controller.extend('helloworld.controller.Main', {
      /**
       * Initialize
       * @override
       */
      onInit: function () {
        this.oRouter = this.getOwnerComponent().getRouter();
        this.oRouter.attachRouteMatched(this.onRouteMatched, this);
      },

      /**
       * Exit
       * @override
       */
      onExit: function () {
        this.oRouter.detachRouteMatched(this.onRouteMatched, this);
      },

      onRouteMatched: function (oEvent) {
        const sRouteName = oEvent.getParameter('name'),
          oArguments = oEvent.getParameter('arguments');

        this._updateUIElements();

        // Save the current route name
        this.currentRouteName = sRouteName;
        this.currentProcessId = oArguments.id;
      },

      onStateChanged: function (oEvent) {
        var bIsNavigationArrow = oEvent.getParameter('isNavigationArrow'),
          sLayout = oEvent.getParameter('layout');

        this._updateUIElements();

        // Replace the URL with the new layout if a navigation arrow was used
        if (bIsNavigationArrow) {
          this.oRouter.navTo(
            this.currentRouteName,
            {
              layout: sLayout,
              id: this.currentProcessId,
            },
            true
          );
        }
      },

      /**
       * Update the close/fullscreen buttons visibility
       */
      _updateUIElements: function () {
        const oModel = this.getOwnerComponent().getModel();
        const oUIState = this.getOwnerComponent()
          .getHelper()
          .getCurrentUIState();
        oModel.setData(oUIState);
      },
    });
  }
);
