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
                    console.log(resp);
                    $scope.totalResults = resp.total_results;
                    $scope.propsList = $scope.propsList.concat(resp.listings);

                    searchHistoryService.setInput($scope.userInput, $scope.totalResults);

                    setViewInfo(resp);
                })

        };
        $scope.showLoading = function () {
           $scope.showLoadingMessage = true
        };

        if($scope.userInput){
            $scope.loadPage();
        }

        function setViewInfo(response) {
            $scope.statusInfo = $scope.propsList.length + ' matches of ' + $scope.totalResults;
            $scope.checkQuantity = $scope.propsList.length <= $scope.totalResults;
            $scope.showError = checkResponseCode(response.application_response_code);
            $scope.showLoadingMessage = false;
        }

        function checkResponseCode(code) {
            if(code === '100' || code === '101' || code === '110'){
                return !$scope.totalResults;
            }

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
