sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/UIComponent"
], function (Controller, MessageToast, formatter, Filter, FilterOperator, UIComponent) {
	"use strict";

	return Controller.extend("CloudTraining.CloudTraining.controller.App", {
		formatter: formatter,
		onInit: function () {
			this.oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},
		onPress: function (oEvent) {
			MessageToast.show(this.oResourceBundle.getText("search") + " " + this.oResourceBundle.getText("search1"));
			var sCity = this.byId('city').getValue(),
				sGenre = this.byId('genre').getSelectedItem().getKey(),
				oCalendar = this.byId("calendar"),
				oRowBinding = oCalendar.getBinding("rows"),
				oFilterGenre,
				oFilterCity;

			// Create filters for genre and city according to user inputs
			oFilterGenre = sGenre ? new Filter("genre", FilterOperator.EQ, sGenre) : null;
			oFilterCity = sCity ? new Filter("info", FilterOperator.Contains, sCity) : null;

			// Apply genre filter to calendar rows
			oRowBinding.filter(oFilterGenre);

			// Apply city filter to row appointments
			var aRows = oCalendar.getAggregation("rows");
			aRows.forEach(function (oItem) {
				var oAppointmentsBinding = oItem.getBinding("appointments");
				oAppointmentsBinding.filter(oFilterCity);
			});

		},
		onAppointmentSelect: function (oEvent) {

			var oContext = oEvent.getParameter("appointment").getBindingContext("movies"),
				sPath = oContext.getPath();
			var aParameters = sPath.split("/");

			UIComponent.getRouterFor(this).navTo("Detail", {
				movieId: aParameters[2],
				appointmentId: aParameters[4]
			});
		}

	});
});