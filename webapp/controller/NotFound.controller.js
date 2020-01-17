sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("CloudTraining.CloudTraining.controller.NotFound", {

		onInit: function () {

		},
		onNavBack: function () {
			UIComponent.getRouterFor(this).navTo("TargetApp");
		}

	});

});