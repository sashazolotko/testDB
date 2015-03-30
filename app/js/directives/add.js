angular.module("MainController")
.directive("add", function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true  
    };
});
