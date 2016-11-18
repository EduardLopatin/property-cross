angular
    .module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('favorites', {
                url: '/favorites',
                templateUrl: '/app/components/favorites/favorites.html',
                controller: 'favoritesCtrl',
                params: {propertyInfo: null}
            })
    })