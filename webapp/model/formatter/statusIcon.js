sap.ui.define([], function () {
  /**
   * Status icon formatter
   * @param {string} sStatus - Status indicator
   * @returns Status icon
   */
  function statusIcon(sStatus) {
    if (!sStatus) return null;

    let icon = 'sap-icon://message-information',
      color = '#42b3f5';

    switch (sStatus) {
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
        color = 'yellow';
        break;
    }

    this.setColor(color);

    return icon;
  }

  return statusIcon;
});
