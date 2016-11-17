angular
    .module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('searchPage',{
                url:'/search-page',
                templateUrl: '/app/components/searchPage/searchPage.html'
            })
    });