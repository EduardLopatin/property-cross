angular
    .module('app')
    .controller('resultListPageCtrl', resultListPageCtrl);

    function resultListPageCtrl($stateParams) {
        console.log($stateParams.item);
    }