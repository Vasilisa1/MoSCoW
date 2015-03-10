'use strict';

/**
 * @ngdoc overview
 * @name moscowApp
 * @description
 * # moscowApp
 *
 * Main module of the application.
 */
angular
  .module('moscowApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
