gitApp.controller('gitController', function($scope, $location) {
    'use strict';

    $scope.siteTitle = 'Git-Technetium';

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        $scope.pageTitle = toState.data.pageTitle;
    });

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});
