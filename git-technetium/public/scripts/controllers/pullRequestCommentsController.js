'use strict';

gitApp.controller('pullRequestCommentsController', function($scope, pullRequestCommentsFactory){
	$scope.pageData = [];

	$scope.submitQuery = function(){
		$scope.pageData = pullRequestCommentsFactory.get($scope.owner, $scope.repo).success(function(data){
			$scope.pageData = data;
		});
	}
});