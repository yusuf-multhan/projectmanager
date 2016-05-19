'use strict';

module.exports = function (sequelize, DataTypes) {
	
	var Task = sequelize.define('task', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		title: DataTypes.STRING,
		phase: DataTypes.TEXT,
		type: DataTypes.TEXT,
		description: DataTypes.TEXT,
		owner: DataTypes.INTEGER,
		estimated_start_date: DataTypes.DATE,
		estimated_end_date: DataTypes.DATE,
		actual_start_date: DataTypes.DATE,
		actual_end_date: DataTypes.DATE
	});

	return Task;

};