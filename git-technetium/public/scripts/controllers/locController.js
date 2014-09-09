gitApp.controller('locController', function($scope, locFactory) {
    'use strict';

    $scope.pageData = [];

    $scope.submitQuery = function() {
        $scope.pageData = locFactory.get($scope.owner, $scope.repo).success(function(data) {
            $scope.pageData = data;
        });
    };
});
