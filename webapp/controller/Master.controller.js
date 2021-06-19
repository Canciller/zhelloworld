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
      onInit: function () {},
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
    });
  }
);
