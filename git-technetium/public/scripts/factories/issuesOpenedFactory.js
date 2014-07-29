/**
 *  Factory for getting the number of opened issues per contributor in a repository.
 */

'use strict';

gitApp.factory('issuesOpenedFactory', function($http) {
    return {
        get: function(ownerName, repoName) {
            return $http({
                url: '/api/issues_opened',
                method: 'GET',
                params: {
                    ownerName: ownerName,
                    repoName: repoName
                }
            });
        }
    };
});
