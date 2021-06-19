sap.ui.define([], function () {
  /**
   * @param {string} status
   * @returns Row highlight
   */
  function rowHighlight(status) {
    switch (status) {
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
  }

  return rowHighlight;
});
