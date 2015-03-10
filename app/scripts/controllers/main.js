'use strict';

/**
 * @ngdoc function
 * @name moscowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moscowApp
 */
angular.module('moscowApp')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.projects = [];

        $http.get('data.json')
            .success(function (data) {
                $scope.projects = data;
            });
    });
