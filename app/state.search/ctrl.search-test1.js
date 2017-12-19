(function () {
    "use strict";

    var app = angular.module('lab916'),
        controllerId = 'testSearchCtrl';

    app.controller(controllerId, ['$scope',
        function ($scope) {
            $scope.message = "Hello from testSearchCtrl";
            $scope.query = '';
            $scope.dataSet1 = [
                {firstname: 'justin', lastname: 'smith', date: '1-1-2018'},
                {firstname: 'julissa', lastname: 'sanchez', date: '1-1-2018'},
                {firstname: 'edward', lastname: 'gomez', date: '1-1-2018'},
                {firstname: 'vince', lastname: 'vu', date: '1-1-2018'},
                {firstname: 'michelle', lastname: 'costa', date: '1-1-2018'},
                {firstname: 'maximus', lastname: 'romulus', date: '1-1-2018'},
                {firstname: 'elizabeth', lastname: 'okelly', date: '1-1-2018'}
            ];
        }
    ]);
}());