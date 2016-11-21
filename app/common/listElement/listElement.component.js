angular
    .module('app')
    .component('listElement',{
        templateUrl: '/app/common/listElement/listElement.html',
        controller: 'listElementCtrl',
        bindings:{
            item: '='
        }
    });