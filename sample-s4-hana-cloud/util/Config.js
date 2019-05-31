sap.ui.define([], function() {
	"use strict";

	return {
		serviceUrl : "/services/v3/js/sample-s4-hana-cloud/api/SalesOrder.js",
		hcbTheme : "sap_hcb",
		standardTheme : sap.ui.getCore().getConfiguration().getTheme(),

		initApp : function(elementId) {
			new sap.m.Shell({
				showLogout : false,
				app : new sap.ui.core.ComponentContainer({
					name : 'salesorders'
				})
			}).placeAt(elementId);
		}
	
	};
});