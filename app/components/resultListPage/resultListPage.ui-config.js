angular
    .module('app')
    .config(
        function ($stateProvider) {
            $stateProvider
                .state('resultListPage',{
                    url:'/result-list-page',
                    templateUrl:'/app/components/resultListPage/resultListPage.html',
                    controller: 'resultListPageCtrl',
                    params:{
                        item: null
                    }
                })
        }
    )