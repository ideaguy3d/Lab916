/**
 * Created by julius on 6/24/2017.
 */

(function(){
    "use strict";

    var app = angular.module('lab916'),
        controllerId = 'CoreCtrl';

    app.controller(controllerId, ['$scope', '$location', CoreCtrlClass]);

    function CoreCtrlClass($scope, $location) {

        $scope.showLanding = true;

        $scope.ccHideHero = function () {
            console.log("JHA - ccHideHero() invoked");
            angular.element('header.video').hide();
        };

        $scope.ccShowHero = function () {
            console.log("JHA - ccShowHero() invoked!!");
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