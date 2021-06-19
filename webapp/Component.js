sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/base/util/UriParameters',
    'sap/ui/model/json/JSONModel',
    'sap/f/FlexibleColumnLayoutSemanticHelper',
    'sap/f/library',
    'helloworld/model/models',
  ],
  function (
    UIComponent,
    UriParameters,
    JSONModel,
    FlexibleColumnLayoutSemanticHelper,
    library,
    models
  ) {
    var LayoutType = library.LayoutType;

    return UIComponent.extend('helloworld.Component', {
      metadata: {
        manifest: 'json',
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // enable routing
        this.getRouter().initialize();

        this.getRouter().attachRouteMatched(this.onRouteMatched, this);

        // set the device model
        this.setModel(models.createDeviceModel(), 'device');

        this.setModel(new JSONModel());
      },

      exit: function () {
        UIComponent.prototype.exit.apply(this, arguments);

        this.oRouter.detachRouteMatched(this.onRouteMatched, this);
      },

      onRouteMatched: function (oEvent) {
        const oModel = this.getModel();

        let sLayout = oEvent.getParameters().arguments.layout;

        // If there is no layout parameter, query for the default level 0 layout (normally OneColumn)
        if (!sLayout) {
          const oNextUIState = this.getOwnerComponent()
            .getHelper()
            .getNextUIState(0);
          sLayout = oNextUIState.layout;
        }

        // Update the layout of the FlexibleColumnLayout
        if (sLayout) {
          oModel.setProperty('/layout', sLayout);
        }
      },

      /**
       * Returns an instance of the semantic helper
       * @returns {sap.f.FlexibleColumnLayoutSemanticHelper} An instance of the semantic helper
       */
      getHelper: function () {
        var oFCL = this.getRootControl().byId('fcl'),
          oParams = UriParameters.fromQuery(location.search),
          oSettings = {
            defaultTwoColumnLayoutType: LayoutType.TwoColumnsMidExpanded,
            defaultThreeColumnLayoutType: LayoutType.ThreeColumnsMidExpanded,
            mode: oParams.get('mode'),
            maxColumnsCount: oParams.get('max'),
          };

        return FlexibleColumnLayoutSemanticHelper.getInstanceFor(
          oFCL,
          oSettings
        );
      },
    });
  }
);
