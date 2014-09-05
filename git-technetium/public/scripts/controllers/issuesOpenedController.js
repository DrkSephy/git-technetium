'use strict';

gitApp.controller('issuesOpenedController', function($scope, issuesOpenedFactory) {
    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = issuesOpenedFactory.get($scope.owner, $scope.repo).success(function(data) {
            $scope.pageData = data;
        });
    };
});
