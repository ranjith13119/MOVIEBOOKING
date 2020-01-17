/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"CloudTraining/CloudTraining/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});