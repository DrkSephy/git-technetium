'use strict';

gitApp.controller('issuesOpenedController', function($scope, issuesOpenedFactory) {
    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = issuesOpenedFactory.get($scope.ownerName, $scope.repoName).success(function(data) {
            $scope.pageData = data;
        });
    }
});
