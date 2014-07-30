'use strict';

gitApp.controller('issuesAssignedController', function($scope, issuesAssignedFactory) {
    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = issuesAssignedFactory.get($scope.ownerName, $scope.repoName).success(function(data) {
            $scope.pageData = data;
        });
    }
});
