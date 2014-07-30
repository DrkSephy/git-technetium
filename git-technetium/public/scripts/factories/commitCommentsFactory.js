// Factory for getting commit comment data for a repository.

'use strict';

gitApp.factory('commitCommentsFactory', function($http){
    return {
        get: function(owner, repo){
            return $http({
                url: '/api/commitComments',
                method: 'GET',
                params: {
                    owner: owner,
                    repo: repo
                }
            });
        }
    };
});