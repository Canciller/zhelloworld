sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel'],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   */
  function (Controller, JSONModel) {
    return Controller.extend('helloworld.controller.Detail', {
      /**
       * Initialize
       */
      onInit: function () {
        this.oRouter = this.getOwnerComponent().getRouter();
        this.oModel = this.getOwnerComponent().getModel();

        this.oRouter
          .getRoute('detail')
          .attachPatternMatched(this.onProcessMatched, this);
      },

      onProcessMatched: function (oEvent) {
        this._processId = oEvent.getParameter('arguments').id;

        if (this._processId) {
          this.getView().bindElement({
            path: 'hello>/HelloWorldSet(' + this._processId + ')',
          });
        }
      },

      handleFullScreen: function () {
        var sNextLayout = this.oModel.getProperty(
          '/actionButtonsInfo/midColumn/fullScreen'
        );

        this.oRouter.navTo('detail', {
          layout: sNextLayout,
          id: this._processId,
        });
      },

      handleExitFullScreen: function () {
        var sNextLayout = this.oModel.getProperty(
          '/actionButtonsInfo/midColumn/exitFullScreen'
        );

        this.oRouter.navTo('detail', {
          layout: sNextLayout,
          id: this._processId,
        });
      },

      handleClose: function () {
        var sNextLayout = this.oModel.getProperty(
          '/actionButtonsInfo/midColumn/closeColumn'
        );

        this.oRouter.navTo('master', { layout: sNextLayout });
      },
    });
  }
);
