'use strict';

gitApp.controller('reportController', function($scope, commitsFactory, locFactory, commitCommentsFactory, 
                    issuesAssignedFactory, issuesClosedFactory, issuesOpenedFactory, issuesCommentsFactory,
                    pullsFactory, pullRequestCommentsFactory){

    $scope.commitData = [];
    $scope.locData = [];
    $scope.commitCommentsData = [];
    $scope.issuesAssignedData = [];
    $scope.issuesClosedData = [];
    $scope.issuesOpenedData = [];
    $scope.issuesCommentsData = [];
    $scope.pullRequestsData = [];
    $scope.pullRequestCommentsData = [];

    $scope.submitQuery = function(){
        $scope.commitData = commitsFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.commitData = data;
            console.log($scope.commitData);
        })

        $scope.locData = locFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.locData = data;
        })

        $scope.commitCommentsData = commitCommentsFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.commitCommentsData = data;
        })

        $scope.issuesAssignedData = issuesAssignedFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.issuesAssignedData = data;
        })

        $scope.issuesClosedData = issuesClosedFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.issuesClosedData = data;
        })

        $scope.issuesOpenedData = issuesOpenedFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.issuesOpenedData = data;
        })

        $scope.issuesCommentsData = issuesCommentsFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.issuesCommentsData = data;
        })

        $scope.pullRequestsData = pullsFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.pullRequestsData = data;
        })

        $scope.pullRequestCommentsData = pullRequestCommentsFactory.get($scope.owner, $scope.repo).success(function(data){
            $scope.pullRequestCommentsData = data;
        })
    }
   
});


