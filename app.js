(function () {
    'use strict';

    angular
        .module('myApp', ['ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        // app routes
        $stateProvider
            .state('info', {
                url: '/',
                templateUrl: 'info/info.view.html',
                controller: 'Info.IndexController',
                controllerAs: 'vm'
            })
    }

    function run() {
    }
})();