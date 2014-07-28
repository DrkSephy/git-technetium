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
