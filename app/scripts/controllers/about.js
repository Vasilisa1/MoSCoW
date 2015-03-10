'use strict';

/**
 * @ngdoc function
 * @name moscowApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moscowApp
 */
angular.module('moscowApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
