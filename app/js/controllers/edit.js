angular.module("MainController")
.controller("editCtrl", ["$scope", "MainSrvc", "catId", "itemId", function ($scope, MainSrvc, catId, itemId) {
    $scope.item = {};
    $scope.show = function () {
        $("#editModal").modal("show");
    };
    $scope.close = function () {
        $("#editModal").modal("hide");  
    };
    $scope.submit = function () {
        MainSrvc.editItem(catId, itemId, $scope.item);
        $scope.close();
    };
    MainSrvc.getItem(catId, itemId).then(function (result) {
        $scope.item = result;
        $scope.item.styles = JSON.parse(result.styles) || null;
    });
}]);
