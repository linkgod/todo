define(function(require){
	var app = require('js/views/app.js'),
		Workspace = require('js/routers/router');

	new Workspace();
	Backbone.history.start();

	new app();
});