angular.module("MainController")
.controller("detailsCtrl", ["$scope", "MainSrvc", "item", "category", function ($scope, MainSrvc, item, category) {
    $scope.item = {};
    MainSrvc.getItem(category, item).then(function (result) {
        $scope.item = result;
        $scope.item.styles = JSON.parse(result.styles) || null;
    });
}]);
