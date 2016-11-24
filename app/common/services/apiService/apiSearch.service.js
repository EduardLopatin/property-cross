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
   var getResponseFromApi = function(input, pageNumber) {
       var deferred = $q.defer();
       $http.get('http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=' + pageNumber + '&place_name=' + input).then(
          function (resp) {
             deferred.resolve(resp.data.response)
          }).catch(function (err) {
           console.log(err); //TODO problem here
       })
       return deferred.promise
   };

    return {
        setUserInput: setUserInput,
        getUserInput: getUserInput,
        getResponseFromApi: getResponseFromApi
    }
}