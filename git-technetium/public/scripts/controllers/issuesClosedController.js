gitApp.controller('issuesClosedController', function($scope, issuesClosedFactory) {
    'use strict';

    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = issuesClosedFactory.get($scope.owner, $scope.repo).success(function(data) {
            $scope.pageData = data;
        });
    };
});
