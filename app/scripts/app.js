'use strict';

/**
 * @ngdoc overview
 * @name futebasApp
 * @description
 * # futebasApp
 *
 * Main module of the application.
 */
angular
  .module('futebasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
