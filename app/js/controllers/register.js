angular.module("MainController")
.controller("registerCtrl", ["$scope", "MainSrvc", function ($scope, MainSrvc) {
    $scope.user = {
        login: null,
        password: null,
    };
    $scope.submit = function () {
        var res = MainSrvc.register($scope.user).then(function (res) {
            $scope.user.ott = res.ott;
            sessionStorage.ott = res.ott;
        });
    };
}]);
