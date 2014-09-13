var gitApp = angular.module('gitApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
        .state('hello', {
            url: '/hello',
            templateUrl: 'partials/basic.partial.html',
            controller: 'basicController',
            data: {
                pageTitle: 'Hello'
            }
        })
        .state('reports', {
            url: '/reports',
            templateUrl: 'partials/report.partial.html',
            controller: 'reportController',
            data: {
                pageTitle: 'Reports'
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
        .state('issues_assigned', {
            url: '/issues_assigned',
            templateUrl: 'partials/issues_assigned.partial.html',
            controller: 'issuesAssignedController',
            data: {
                pageTitle: 'Issues Assigned Per Contributor'
            }
        })
        .state('issues_closed', {
            url: '/issues_closed',
            templateUrl: 'partials/issues_closed.partial.html',
            controller: 'issuesClosedController',
            data: {
                pageTitle: 'Issues Closed Per Contributor'
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
        .state('loc', {
            url: '/loc',
            templateUrl: 'partials/loc.partial.html',
            controller: 'locController',
            data: {
                pageTitle: 'Lines of Code'
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
        })
        .state('issuesComments', {
            url: '/issuesComments',
            templateUrl: 'partials/issues_comments.partial.html',
            controller: 'issuesCommentsController',
            data:{
                pageTitle: 'Issues Comments'
            }
        })
        .state('pullRequestComments', {
            url: '/pullRequestComments',
            templateUrl: 'partials/pull_requestsComment.partial.html',
            controller: 'pullRequestCommentsController',
            data: {
                pageTitle: 'Pull Requests Comments'
            }
        });
});
