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
        })
        .state('commits', {
            url: '/commits',
            templateUrl: 'partials/commits.partial.html',
            controller: 'commitsController',
            data: {
                pageTitle: 'Commits'
            }
        })
        .state('commitComments', {
            url: '/commitComments',
            templateUrl: 'partials/commitComments.partial.html',
            controller: 'commitCommentsController',
            data: {
                pageTitle: 'Commit Comments'
            }
        })
        .state('pulls',{
            url: '/pulls',
            templateUrl: 'partials/pulls.partial.html',
            controller: 'pullsController',
            data: {
                pageTitle: 'Pulls'
            }
        });

});
