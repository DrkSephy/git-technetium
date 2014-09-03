'use strict';

gitApp.controller('issuesCommentsController', function($scope, issuesCommentsFactory) {
    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = issuesCommentsFactory.get($scope.owner, $scope.repo).success(function(data) {
            $scope.pageData = data;
        });
    };
});
