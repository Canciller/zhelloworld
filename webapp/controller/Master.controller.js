sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel'],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.ui.core.format.DateFormat} DateFormat
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   */
  function (Controller, JSONModel) {
    return Controller.extend('helloworld.controller.Master', {
      /**
       * Initialize
       */
      onInit: function () {
        this.oRouter = this.getOwnerComponent().getRouter();
      },

      /**
       * @returns Table element
       */
      getTable: function () {
        return this.byId('table');
      },

      /**
       * Refresh table callback
       */
      onRefresh: function () {
        this.getTable().getBinding().refresh(true);
      },

      /**
       * Table cell click callback
       * @param {sap.ui.base.Event} oEvent
       */
      onCellClick: function (oEvent) {
        const oNextUIState = this.getOwnerComponent()
          .getHelper()
          .getNextUIState(1);

        const oParameters = oEvent.getParameters(),
          oContext = oParameters.rowBindingContext;

        if (oContext) {
          const oDetail = oContext.getObject();

          this.oRouter.navTo('detail', {
            id: oDetail.id,
            layout: oNextUIState.layout,
          });
        }
      },
    });
  }
);
