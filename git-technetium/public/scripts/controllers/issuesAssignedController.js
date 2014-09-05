'use strict';

gitApp.controller('issuesAssignedController', function($scope, issuesAssignedFactory) {
    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = issuesAssignedFactory.get($scope.owner, $scope.repo).success(function(data) {
            $scope.pageData = data;
        });
    };
});
