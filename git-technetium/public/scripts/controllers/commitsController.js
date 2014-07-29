'use strict';

gitApp.controller('commitsController', function($scope, commitsFactory){
    $scope.pageData = [];

    $scope.submitQuery = function(){
        $scope.pageData = commitsFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.pageData = data;
            console.log($scope.pageData);
        });
    }
});