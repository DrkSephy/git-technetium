gitApp.controller('pullRequestCommentsController', function($scope, pullRequestCommentsFactory) {
    'use strict';

    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = pullRequestCommentsFactory.get($scope.owner, $scope.repo).success(function(data) {
            $scope.pageData = data;
        });
    };
});
