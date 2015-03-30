angular.module("MainController")
.directive("login", function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true  
    };
});
