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
        })
        .state('issues', {
            url: '/issues',
            templateUrl: 'partials/issues.partial.html',
            controller: 'issuesController',
            data: {
                pageTitle: 'Issues'
            }
        })
        .state('issues_opened', {
            url: '/issues_opened',
            templateUrl: 'partials/issues_opened.partial.html',
            controller: 'issuesOpenedController',
            data: {
                pageTitle: 'Issues Opened Per Contributor'
            }
        });
});
