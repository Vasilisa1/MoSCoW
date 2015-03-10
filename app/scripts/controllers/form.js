/**
 * Created by van Rossum on 10-3-2015.
 */
'use strict';

angular.module('moscowApp')
    .controller('FormCtrl', function ($scope, MainCtrl) {
        $scope.project = {};

        $scope.formSubmit = function() {
            MainCtrl.projects.push($scope.project);
            console.log('Append');
        };
    });