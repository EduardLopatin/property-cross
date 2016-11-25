angular
    .module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('favorites', {
                url: '/favorites',
                template: '<favorites></favorites>'
            })
    })