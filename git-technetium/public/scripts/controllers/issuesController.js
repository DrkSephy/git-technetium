'use strict';

gitApp.controller('issuesController', function($scope, issuesFactory) {
    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = issuesFactory.get($scope.owner, $scope.repo).success(function(data) {
            $scope.pageData = data;
        });
    };
});
