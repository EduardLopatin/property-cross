angular
    .module('app')
    .config(function ($stateProvider) {
        $stateProvider.
            state('propertyPage',{
                url: '/property-page',
                templateUrl: '/app/components/propertyPage/propertyPage.html',
                controller: 'propertyPageCtrl',
                params:{propertyInfo: null}
        })
    })