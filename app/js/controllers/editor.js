angular.module("MainController")
.controller("editorCtrl", ["$scope", "MainSrvc", function ($scope, MainSrvc) {
    $scope.sizes = (function () {
        var szs = [];
        for (var size = 10; size < 73; size+=3) {
            szs.push(size + "px");
        }
        return szs;
    })();
    $scope.item.styles = {};
    $scope.fonts = ["Times New Roman", "Georgia", "Arial", "Verdana", "Courier New", "Lucida Console"];
    $scope.setFontStyleBold = function () {
        if ($scope.item.styles['font-weight'] != 'bold') {
            $scope.item.styles['font-weight'] = 'bold';
        } else {
            $scope.item.styles['font-weight'] = 'normal';
        }
    };
    $scope.setFontStyleItalic = function () {
        if ($scope.item.styles['font-style'] != 'italic') {
            $scope.item.styles['font-style'] = 'italic';
        } else {
            $scope.item.styles['font-style'] = 'normal';
        }
    };
    $scope.setFontStyleUndeline = function () {
        if ($scope.item.styles['text-decoration'] != 'underline') {
            $scope.item.styles['text-decoration'] = 'underline';
        } else {
            $scope.item.styles['text-decoration'] = 'normal';
        }
    };
    $scope.setFontStyleAlign = function (align) {
        $scope.item.styles['text-align'] = align;
    };
}]);
