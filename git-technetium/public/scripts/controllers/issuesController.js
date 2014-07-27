'use strict';

gitApp.controller('issuesController', function($scope, issuesFactory) {
    $scope.pageData = [];
    $scope.pageData = issuesFactory.get().success(function(data) {
        $scope.pageData = data;
    });
});
