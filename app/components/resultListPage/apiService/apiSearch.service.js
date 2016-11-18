angular
    .module('app')
    .factory('apiSearchService', apiSearchService);

function apiSearchService($http, $q) {
   var setUserInput = function (input) {
        input = JSON.stringify(input);
        sessionStorage.userInput = input;
   }
   function getUserInput() {
       return JSON.parse(sessionStorage.userInput);
   }
   var getPropsList = function(input, pageNumber) {
       var deferred = $q.defer();
       $http.get('http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=' + pageNumber + '&place_name=' + input).then(
          function (resp) {
             deferred.resolve(resp.data.response.listings)
          }
       );

       return deferred.promise
   };

    return {
        setUserInput: setUserInput,
        getUserInput: getUserInput,
        getPropsList: getPropsList
    }
}