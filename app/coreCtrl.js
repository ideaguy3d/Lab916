/**
 * Created by julius on 6/24/2017.
 */


(function(){
    "use strict";

    var app = angular.module('sonora'),
        controllerId = 'CoreCtrl';

    app.controller(controllerId, ['$scope', '$location', CoreCtrlClass]);

    function CoreCtrlClass($scope, $location) {

        $scope.showLanding = true;

        $scope.hideHero = function () {
            angular.element('header.video').hide();
        };

        $scope.showHero = function () {
            angular.element('header.video').show();
        };

        var hero = $location.url() === '/home';
        console.log("jha - $location.url() = ");
        console.log($location.url());
        console.log(typeof $location.url());

        if(hero) {
            $('header.video').show();
        } else {
            $('header.video').hide();
        }

    }
})();