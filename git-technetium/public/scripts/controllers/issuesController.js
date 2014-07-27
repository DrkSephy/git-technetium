'use strict';

gitApp.controller('issuesController', function($scope, issuesFactory) {
    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = issuesFactory.get($scope.ownerName, $scope.repoName).success(function(data) {
            $scope.pageData = data;
        });
    }
});
