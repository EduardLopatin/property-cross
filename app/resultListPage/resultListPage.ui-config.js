angular
    .module('app')
    .config(
        function ($stateProvider) {
            $stateProvider
                .state('resultListPage',{
                    url:'/result-list-page',
                    templateUrl:'/app/resultListPage/resultListPage.html'
                })
        }
    )