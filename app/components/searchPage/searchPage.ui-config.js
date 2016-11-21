angular
    .module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('searchPage',{
                url:'/search-page',
                template: '<search-page></search-page>'
            })
    });