'use strict';

gitApp.factory('pullRequestCommentsFactory', function($http){
	return {
		get: function(owner, repo){
			return $http({
				url: '/api/pullRequestComments',
				methods: 'GET',
				params: {
					owner: owner,
					repo: repo
				}

			});
		}
	};
});