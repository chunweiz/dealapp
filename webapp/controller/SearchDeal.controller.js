sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("wb.cosmos.dealapp.controller.SearchDeal", {

		onInit: function () {

		},
		onExecute: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("dealMD");
		}

	});

});