'use strict';

module.exports = function (app) {

	app.get('/users', function (req, res, next) {
		res.json({"name":"getAll"})
	});
	
	app.get('/users/:id', function (req, res, next) {
		res.json({"name":"show"})
	});
	
	app.post('/users/add', function (req, res, next) {
		res.json({"name":"add"})
	});
	
	app.put('/users/:id/edit', function (req, res, next) {
		res.json({"name":"update"})
	});
	
	app.delete('/users/:id/delete', function (req, res, next) {
		res.json({"name":"delete"})
	});

}
