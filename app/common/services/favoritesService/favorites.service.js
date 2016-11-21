angular
    .module('app')
    .factory('favoritesService', favoritesService);

function favoritesService() {
    var setList = function (list) {
        localStorage.favorites = JSON.stringify(list);
    }
    var setProperty = function(item) {
        if(localStorage.favorites){
            putItemInLocalStorage(item);
        }else{
            localStorage.favorites = '[]';
            putItemInLocalStorage(item);
        }
    };

    function putItemInLocalStorage(item) {
        var favoritesList = getFavoritesList();
        favoritesList.push(item);
        localStorage.favorites = JSON.stringify(favoritesList);
    }
    
    
    function getFavoritesList() {
        if(!localStorage.favorites){
            localStorage.favorites = '[]';
        }
        return JSON.parse(localStorage.favorites)
    }
    
    var checkProperty = function(property) {
           var isFound = getFavoritesList().find(function (item) {
               if(property.img_url === item.img_url){
                   return item
               }
           });

           return checkFoundItem(isFound);
    };
function checkFoundItem(variable) {
    if(typeof variable === "object"){
        return true
    }
    else {
        return false
    }
}

    return {
        setProperty: setProperty,
        getFavoritesList: getFavoritesList,
        checkProperty: checkProperty,
        setList: setList
    }
}