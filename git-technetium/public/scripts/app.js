'use strict';

var gitApp = angular.module('gitApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('hello', {
            url: '/hello',
            templateUrl: 'partials/basic.partial.html',
            controller: 'basicController',
            data: {
                pageTitle: 'Hello'
            }
        });
});
