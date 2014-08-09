'use strict';

gitApp.controller('issuesClosedController', function($scope, issuesClosedFactory) {
    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = issuesClosedFactory.get($scope.ownerName, $scope.repoName).success(function(data) {
            $scope.pageData = data;
        });
    }
});
