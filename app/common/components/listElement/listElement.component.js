angular
    .module('app')
    .component('listElement',{
        templateUrl: '/app/common/components/listElement/listElement.html',
        controller: 'listElementCtrl',
        bindings:{
            item: '='
        }
    });