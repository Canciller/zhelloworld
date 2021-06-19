sap.ui.define([], function () {
  /**
   * Status icon formatter
   * @param {string} status - Status indicator
   * @returns Status icon
   */
  function statusIcon(status) {
    if (!status) return null;

    let icon = 'sap-icon://message-information',
      color = '#42b3f5';

    switch (status) {
      case 'S':
        icon = 'sap-icon://message-success';
        color = 'green';
        break;
      case 'E':
        icon = 'sap-icon://message-error';
        color = '#f54b42';
        break;
      case 'W':
        icon = 'sap-icon://message-warning';
        color = 'orange';
        break;
    }

    this.setColor(color);

    return icon;
  }

  return statusIcon;
});
