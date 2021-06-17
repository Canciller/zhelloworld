sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/format/DateFormat',
    'sap/ui/model/json/JSONModel',
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.ui.core.format.DateFormat} DateFormat
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   */
  function (Controller, DateFormat, JSONModel) {
    // Create DateFormat instance
    const oDateFormat = DateFormat.getDateInstance({
      pattern: 'MM/dd/yyyy',
    });

    // Create DateTimeFormat instance
    const oDateTimeFormat = DateFormat.getDateTimeInstance({
      pattern: 'MM/dd/yyyy hh:mm:ss a',
    });

    // Columnas: Process name
    // Monitor de interfaces
    // Master detail
    // Doble clic, cargar detalle
    // Otro controlador pasar id proceso

    return Controller.extend('helloworld.controller.Main', {
      formatter: {
        /**
         * @param {Date} oDate
         * @returns Formatted date
         */
        date: function (oDate) {
          return oDate ? oDateFormat.format(oDate) : null;
        },
        datetime: function (oDate) {
          return oDate ? oDateTimeFormat.format(oDate) : null;
        },
        /**
         * @param {string} sStatus
         * @returns Row highlight color
         */
        highlightColor: function (sStatus) {
          switch (sStatus) {
            case 'E':
              return 'Error';
            case 'W':
              return 'Warning';
            case 'S':
              return 'Success';
            case 'I':
              return 'Information';
            default:
              return 'None';
          }
        },
      },
      /**
       * Initialize
       */
      onInit: function () {
        this.oModel = new JSONModel({
          last_update_date: new Date(),
        });

        this.getView().setModel(this.oModel, 'main');
      },
      /**
       * @returns Table view
       */
      getTable: function () {
        return this.byId('table');
      },
      /**
       * Refresh table data
       */
      onRefresh: function () {
        this.getTable().getBinding().refresh(true);
        this.oModel.setProperty('/last_update_date', new Date());
      },
    });
  }
);
