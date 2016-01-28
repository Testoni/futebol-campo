'use strict';

var app = angular.module('futebasApp');

app.factory('Usuario', function($resource) {
	var resource = $resource('api/usuarios/:oid', {}, {
		query: {
			isArray: false
		}
	});

	return resource;
});
