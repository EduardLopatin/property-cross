angular
    .module('app',['ui.router'])
    .config(appConfig);

function appConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/search-page')
}