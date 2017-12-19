/**
 * Created by julius on 6/24/2017.
 */


(function () {
    "use strict";

    var app = angular.module('lab916', ['ngRoute']);

    app.config(function ($routeProvider) {

        // build stuff !

        $routeProvider
            .when('/home', {
                templateUrl: 'app/landing/view.landing-v2.html',
                resolve: function () {
                    //
                }
            })
            .when('/login', {
                template: '<h2>This will be a LOGIN page</h2>',
                resolve: function () {
                    //
                }
            })
            .when('/signup', {
                template: '<h2>This will be a SIGN UP page</h2>',
                resolve: function () {
                    //
                }
            })
            .when('/search-test1', {
                templateUrl: 'app/state.search/view.search-test1.html',
                controller: 'testSearchCtrl'
            })
            .when('/about-us', {
                templateUrl: 'app/state.about-us/view.about-us.html',
                controller: 'testSearchCtrl'
            })
            .when('/case-studies', {
                templateUrl: 'app/state.case-studies/view.case-studies.html',
                controller: 'testSearchCtrl'
            })
            .when('/contact-us', {
                templateUrl: 'app/state.contact-us/view.contact-us.html',
                controller: 'testSearchCtrl'
            })
            .when('/blog', {
                templateUrl: 'app/state.blog/view.blog.html',
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