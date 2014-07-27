'use strict';

gitApp.factory('issuesFactory', function($http) {
    return {
        get: function() {
            return $http({
                url: '/api/issues',
                method: 'GET'
            });
        }
    };
});
