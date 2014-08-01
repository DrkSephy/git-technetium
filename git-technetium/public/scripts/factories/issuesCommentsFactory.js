'use strict';

gitApp.factory('issuesCommentsFactory', function($http){
	return {
		get: function(owner, repo){
			return $http({
				url: '/api/issuesComments',
				method: 'GET',
				params: {
					owner: owner,
					repo: repo
				}
			});
		}
	};
});