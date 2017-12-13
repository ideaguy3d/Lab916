/**
 * Created by julius on 6/24/2017.
 */


(function(){
    "use strict";

    var app = angular.module('sonora'),
        componentId = 'createSet';

    app.component(componentId, {
        templateUrl: 'app/create/temp.create.html',
        bindings: {
            showLanding: "="
        },
        controller: ['$window', ComponentClass]
    });

    function ComponentClass ($window) {
        var vm = this;

        vm.message = "Ello From Create component";
    }
})();