angular
    .module('app')
    .config(function ($stateProvider) {
        $stateProvider.
            state('propertyPage',{
                url: '/property-page',
                template: '<property-page></property-page>',
                params:{propertyInfo: null}
        })
    })