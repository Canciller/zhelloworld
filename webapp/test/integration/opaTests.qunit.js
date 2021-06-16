/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
  sap.ui.require([], function () {
    QUnit.start();
  });
});
