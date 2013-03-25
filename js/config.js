seajs.config({
	plugins: ['shim'],
	alias: {
		'jquery': {
			src: 'components/jquery/jquery.js',
			exports: 'jQuery'
		},

		'underscore': {
			src: 'components/underscore/underscore.js',
			exports: '_'
		},

		'backbone': {
			src: 'components/backbone/backbone.js',
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		'backbone.localStorage': {
			src: 'components/backbone.localStorage/backbone.localStorage.js',
			deps: ['backbone']
		}
	}
})