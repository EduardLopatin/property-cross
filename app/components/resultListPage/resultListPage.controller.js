angular
    .module('app')
    .controller('resultListPageCtrl', resultListPageCtrl);

    function resultListPageCtrl($scope, $state, $stateParams, apiSearchService, searchHistoryService) {
        $scope.pageCount = 0;
        $scope.propsList = [];
        $scope.userInput = '';
        $scope.statusInfo = '';
        $scope.totalResults = 0;
        $scope.fullResponse = null;

        saveUserInput();

        $scope.loadPage = function () {
            $scope.pageCount++;
            apiSearchService
                .getResponseFromApi($scope.userInput, $scope.pageCount)
                .then(function (resp) {
                    $scope.totalResults = resp.total_results;
                    $scope.propsList = $scope.propsList.concat(resp.listings);
                    searchHistoryService.setInput($scope.userInput, $scope.totalResults);
                    setStatusInfo();
                });

        };

        if($scope.userInput){
            $scope.loadPage();
        }


            function setStatusInfo() {
                $scope.statusInfo = $scope.propsList.length + ' matches of ' + $scope.totalResults
            }
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
    }
