sap.ui.define([
		'jquery.sap.global',
		'sap/m/MessageToast',
		'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller'
	], function(jQuery, MessageToast, Fragment, Controller) {
	"use strict";

	var CController = Controller.extend("wb.cosmos.dealapp.controller.DealMasterDetail", {

		onAfterRendering: function() {
			var oSplitCont= this._getSplitContObj(),
				ref = oSplitCont.getDomRef() && oSplitCont.getDomRef().parentNode;
			// set all parent elements to 100% height, this should be done by app developer, but just in case
			if (ref && !ref._sapui5_heightFixed) {
				ref._sapui5_heightFixed = true;
				while (ref && ref !== document.documentElement) {
					var $ref = jQuery(ref);
					if ($ref.attr("data-sap-ui-root-content")) { // Shell as parent does this already
						break;
					}
					if (!ref.style.height) {
						ref.style.height = "100%";
					}
					ref = ref.parentNode;
				}
			}
		},

		// onPressNavToDetail : function(oEvent) {
		// 	this.getSplitContObj().to(this.createId("detailDetail"));
		// },
		
		onToggleFullScreen : function(oEvent) {
			
			var button = this.byId(oEvent.getSource().sId);
			if (this._getSplitContObj().getMode() !== sap.m.SplitAppMode.HideMode ){
				this._getSplitContObj().setMode(sap.m.SplitAppMode.HideMode);
				button.setIcon("sap-icon://exit-full-screen");
				
			}else {
				this._getSplitContObj().setMode(sap.m.SplitAppMode.ShowHideMode);
				button.setIcon("sap-icon://full-screen");
			}
		},

		onPressMasterBack : function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("searchDeal");
		},

		onListItemPress : function(oEvent) {
			MessageToast.show("masterlist item pressed");
		},

		_getSplitContObj : function() {
			var result = this.byId("WBDealAppSplitCont");
			if (!result) {
				jQuery.sap.log.error("SplitApp object can't be found");
			}
			return result;
		}

	});


	return CController;

});