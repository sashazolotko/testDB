angular.module("MainController")
.controller("itemsCtrl", ["$scope", "MainSrvc", 'category', "$state", function ($scope, MainSrvc, category, $state) {
    MainSrvc.getItems(category).then(function (result) {
        $scope.items = result;
    });
    $scope.onClick = function (evt) {
        evt.stopPropagation();
    };
    $scope.onDragSuccess = function (index, data, evt) {
    };
}]);
