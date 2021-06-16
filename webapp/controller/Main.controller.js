sap.ui.define(
  ['sap/ui/core/mvc/Controller'],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    return Controller.extend('helloworld.controller.Main', {
      formatter: {
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
      onInit: function () {},
    });
  }
);
