/**
 *  Factory for getting issue titles in a repository.
 */

'use strict';

gitApp.factory('issuesFactory', function($http) {
    return {
        get: function(owner, repo) {
            return $http({
                url: '/api/issues',
                method: 'GET',
                params: {
                    owner: owner,
                    repo: repo
                }
            });
        }
    };
});
