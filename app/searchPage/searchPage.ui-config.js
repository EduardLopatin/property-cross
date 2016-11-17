angular
    .module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('searchPage',{
                url:'/search-page',
                templateUrl: '/app/searchPage/searchPage.html',
                controller: 'searchPageCtrl',
                params:{
                    item: null
                }
            })
            .state('searchPage.history', {
                url:'/history',
                template: '<search-history></search-history>'
            })
            .state('searchPage.error', {
            url:'/error',
            template:'some error'
        })
    })