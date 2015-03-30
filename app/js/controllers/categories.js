angular.module("MainController")
.controller("categoriesCtrl", ["$scope", "MainSrvc", "$state", function ($scope, MainSrvc, $state) {
    MainSrvc.getCategories().then(function (result) {
        $scope.categories = result;
    });
    $scope.logout = function () {
        MainSrvc.logOut().then(function() {
            sessionStorage.removeItem('ott');  
        }, function (error) {
            return;
        });
    };
    $scope.onDropSuccess = function (index, data, evt) {
        MainSrvc.editItem(data.category, data.id, {
            category: $scope.categories[index].id
        }).then(function () {
            $state.go("categories.items", $state.params, { 
                reload: true
            });
        });
    };
    
    $scope.onDeleteLiDrop = function (data) {
        MainSrvc.deleteItem(data.category, data.id)
        .then(function () {
            $state.go("categories.items", $state.params, { 
                reload: true
            });
        }, function (error) {
            console.log(error);
        });
    };
}]);
