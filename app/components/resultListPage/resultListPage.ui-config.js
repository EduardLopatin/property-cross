angular
    .module('app')
    .config(
        function ($stateProvider) {
            $stateProvider
                .state('resultListPage',{
                    url:'/result-list-page',
                    template:'<result-list></result-list>',
                    params:{
                        userInput: null
                    }
                })
        }
    )