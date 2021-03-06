sap.ui.define([
    	"sap/ui/core/UIComponent",
    	"sap/ui/model/json/JSONModel"
    ], function (UIComponent, JSONModel) {
    	"use strict";
     
    	return UIComponent.extend("wb.cosmos.dealapp.Component", {
     
    		metadata : {
    			manifest: "json"
    		},
     
    		init : function () {
     
    			// call the init function of the parent
    			UIComponent.prototype.init.apply(this, arguments);
    			this.getRouter().initialize();
    			var oModel = new JSONModel(this.getMetadata().getConfig().searchHelpLocal);
    			this.setModel(oModel);
    		}
    	});
     
    });