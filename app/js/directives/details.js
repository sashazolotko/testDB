angular.module("MainController")
.directive("detail", function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true  
    };
});
