angular
    .module('app')
    .component('navBar',{
        templateUrl: '/app/searchPage/components/header.html'
    })
    .component('infoField', {
        templateUrl: '/app/searchPage/components/infoField.html'
    })
    .component('searchBlock', {
        templateUrl: '/app/searchPage/components/searchBlock.html',
        controller:'searchPageCtrl'
    })
    .component('searchHistory', {
    templateUrl: '/app/searchPage/components/searchHistory.html'
})