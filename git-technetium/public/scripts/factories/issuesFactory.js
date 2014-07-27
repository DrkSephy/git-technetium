'use strict';

gitApp.factory('issuesFactory', function($http) {
    return {
        get: function(ownerName, repoName) {
            return $http({
                url: '/api/issues',
                method: 'GET',
                params: {
                    ownerName: ownerName,
                    repoName: repoName
                }
            });
        }
    };
});
