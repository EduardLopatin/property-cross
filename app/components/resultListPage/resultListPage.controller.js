angular
    .module('app')
    .controller('resultListPageCtrl', resultListPageCtrl);

function resultListPageCtrl($scope, $state, $stateParams, apiSearchService, searchHistoryService) {
    $scope.pageCount = 0;
    $scope.propsList = [];
    $scope.userInput = '';
    $scope.totalResults = 0;

    saveUserInput();

    $scope.loadPage = function () {
        $scope.pageCount++;
        apiSearchService
            .getResponseFromApi($scope.userInput, $scope.pageCount)
            .then(function (resp) {
                    setViews(resp);
                    if(!$scope.propsList.length) throw  new UserException("There were no properties found for the given location.");
                    searchHistoryService.setInput($scope.userInput, resp.total_results);
            }, function () {
                $scope.errorMessage = 'An error occurred while searching. Please check your network connection and try again.';
                $scope.showLoadMore = false;
                }
            )
    };

    function setViews(resp) {
        $scope.propsList = $scope.propsList.concat(resp.listings);
        $scope.totalResults = resp.total_results;
        $scope.showLoadMore = $scope.propsList.length < $scope.totalResults;
        $scope.infoBar = $scope.propsList.length + ' matches of ' + $scope.totalResults;
        $scope.hideSpinner = true;
        $scope.showLoadingMessage = false;
    }

    !!$scope.userInput && $scope.loadPage(); //here we load page in first time

    $scope.showLoading = function () {
        $scope.showLoadingMessage = true
    };

    function saveUserInput() {
        if($stateParams.userInput != null){
            $scope.userInput = $stateParams.userInput;
            apiSearchService.setUserInput($stateParams.userInput);
        }else if(sessionStorage.userInput) {
            $scope.userInput = apiSearchService.getUserInput();
        }else {
            $state.go('searchPage')
        }
    }
    function UserException(message) {
        $scope.errorMessage = message;
        $scope.hideSpinner = true;
        $scope.showLoadingMessage = false;
    }
}
