sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/core/format/DateFormat'],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.ui.core.format.DateFormat} DateFormat
   */
  function (Controller, DateFormat) {
    // Create DateFormat instance
    const oDateFormat = DateFormat.getDateInstance({
      pattern: 'MM/dd/yyyy',
    });

    return Controller.extend('helloworld.controller.Main', {
      formatter: {
        /**
         * @param {Date} oDate
         * @returns Formatted date
         */
        date: function (oDate) {
          return oDate ? oDateFormat.format(oDate) : null;
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
      getTable: function () {
        return this.byId('table');
      },
      onRefresh: function () {
        this.getTable().getBinding().refresh(true);
      },
    });
  }
);
