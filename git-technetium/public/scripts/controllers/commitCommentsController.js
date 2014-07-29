// Controller for handling commit comment data for a repository.

'use strict';

gitApp.controller('commitCommentsController', function($scope, commitCommentsFactory){
    $scope.pageData = [];

    $scope.submitQuery = function(){
        $scope.pageData = commitCommentsFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.pageData = data;
            console.log($scope.pageData);
        })
    }
});

