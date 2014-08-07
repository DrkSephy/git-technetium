'use strict';

gitApp.factory('pullRequestCommentsFactory', function($http){
	return {
		get: function(owner, repo){
			return $http({
				url: '/api/pullRequestComments',
				method: 'GET',
				params: {
					owner: owner,
					repo: repo
				}
			});
		}
	};
});