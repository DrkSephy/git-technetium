'use strict';

gitApp.controller('pullsController', function($scope, pullsFactory) {
    $scope.pageData = [];

    $scope.submitQuery = function(){
        $scope.pageData = pullsFactory.get($scope.owner, $scope.repo).success(function(data){
           $scope.pageData = data;
        });
    }
});
