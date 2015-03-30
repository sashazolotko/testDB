var testDBApp = angular.module("testDBApp", ["ui.router", "MainController", "MainService", "ngDraggable"]);
testDBApp
.config(
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/register');
        $stateProvider.state("categories", {
           url: "/categories",
           views: {
               'categories' : {
                    templateUrl: "../views/categories.html",
                    controller: "categoriesCtrl"
               }
           } 
        }).state("categories.items.add", {
           url: "/add",
           views: {
               'add@': {
                    templateUrl: "../views/add.html",
                    resolve: {
                        id: function ($stateParams) {
                            return $stateParams.categoryId;
                        }
                    },
                    controller: "addCtrl"
                }
           }
        })
        .state("categories.items", {
            url: "/{categoryId:int}",
            views: {
                'items@': {
                    templateUrl: "../views/items.html",
                    resolve: {
                        category: function ($stateParams) {
                            return $stateParams.categoryId;
                        }
                    },
                    controller: "itemsCtrl"
                }
            }
        }).state("categories.items.details", {
            url: "/{itemId:int}",
            views: {
                'details@': {
                    templateUrl: "../views/details.html",
                    resolve: {
                        item: function ($stateParams) {
                            return $stateParams.itemId;
                        },
                        category: function ($stateParams) {
                            return $stateParams.categoryId;
                        }
                    },
                    controller: "detailsCtrl"
                }
            }
        }).state("categories.items.details.edit", {
            url: "/edit",
            views: {
                'edit@': {
                    templateUrl: "../views/edit.html",
                    resolve: {
                        catId: function ($stateParams) {
                            return $stateParams.categoryId;
                        },
                        itemId: function ($stateParams) {
                            return $stateParams.itemId;
                        }
                    },
                    controller: "editCtrl"
                }
            }
        }).state("login", {
            url: "/login",
            templateUrl: "../views/login.html",
            controller: "loginCtrl",
        }).state("register", {
            url: "/register",
            templateUrl: "../views/register.html",
            controller: "registerCtrl"
        });
    }
);
