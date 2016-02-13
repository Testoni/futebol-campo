'use strict';

var app = angular.module('futebasApp');

app.factory('Jogador', function ($resource, CONFIG) {
                return $resource(CONFIG.hostUrl + '/api/:oid', {oid: '@oid'});
});
