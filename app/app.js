/**
 * Created by julius on 6/24/2017.
 */


(function () {
    "use strict";

    var app = angular.module('sonora', ['ngRoute', 'firebase']);

    app.config(function ($routeProvider) {


        // build stuff !

        $routeProvider
            .when('/', {
                template: '',
                resolve: function () {
                    //
                }
            })
            .when('/login', {
                template: '',
                resolve: function () {
                    //
                }
            });
    })
})();