'use strict';

gitApp.controller('commitCommentsController', function($scope, commitCommentsFactory){
    $scope.pageData = [];

    $scope.submitQuery = function(){
        $scope.pageData = commitCommentsFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.pageData = data;
        });
    };
});
