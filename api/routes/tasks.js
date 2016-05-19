'use strict';

var models = require('../models');

module.exports = function (app) {

	app.get('/tasks', function (req, res) {
		models.task.findAll({}).then(function (tasks) {
			res.json(tasks);
		}, function (err){
			console.log(err)
		});
	});

	app.get('/tasks/:id', function (req, res) {
		res.json({"name":"show"});
	});
	
	app.post('/tasks/add', function (req, res) {
		var record = {
			id:'1',
			title:'api creation',
			phase:'Dev',
			type:'Coding',
			description:'api for all tasks'
		};
		
		models.task.upsert(record, []).then(function (tasks) {
			res.json(tasks);
		}, function (err){
			console.log(err)
		});
	});

	app.put('/tasks/:id/edit', function (req, res) {
		res.json({"name":"update"});
	});
	
	app.delete('/tasks/:id/delete', function (req, res) {
		res.json({"name":"delete"});
	});

}

