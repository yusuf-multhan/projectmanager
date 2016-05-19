'use strict';

module.exports = function (app) {
	
	// User routes
	require('./users')(app);
	
	// Work routes
	require('./tasks')(app);

};
