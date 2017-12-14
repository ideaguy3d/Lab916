/**
 * Created by julius on 6/24/2017.
 */


(function () {
    "use strict";

    var app = angular.module('sonora', ['ngRoute']);

    app.config(function ($routeProvider) {


        // build stuff !

        $routeProvider
            .when('/home', {
                templateUrl: 'app/landing/view.landing.html',
                resolve: function () {
                    //
                }
            })
            .when('/login', {
                template: '<h2>This is the LOGIN VIEW</h2>',
                resolve: function () {
                    //
                }
            })
            .when('/create', {
                template: '<create-set></create-set>',
                resolve: function () {
                    //
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
})();