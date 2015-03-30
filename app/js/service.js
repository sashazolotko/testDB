angular.module("MainService", [])
.service("MainSrvc", ["$http", function ($http) {
    function getCategories() {
        return $http.get("/categories").then(function (result) {
            return result.data;
        }, function (error) {
            throw error;
        });
    }
    function getItems(id) {
        return $http.get("/categories/" + id).then(function (result) {
            return result.data;
        }, function (error) {
            throw error;
        });
    }
    function getItem(categoryId, itemId) {
        return $http.get("/categories/" + categoryId + "/" + itemId)
                .then(function (result) {
                    return result.data;
                }, function (error) {
                    throw error;
                });
    }
    function getUserId() {
        return $http.get("/user").then(function (result) {
            return result.data;
        }, function (error) {
            throw error;
        });
    }
    function logIn(user) {
        return $http.get("/user/auth?login=" + user.login + "&password=" + user.password)
        .then(function (result) {
            return result.data;
        }, function (error) {
            throw error;
        });
    }
    function logOut() {
        return $http.get("/user/logOut")
        .then(function () {}, function (error) {
            throw error;
        });
    }
    function register(user) {
        return $http.post("/user/", user)
        .then(function (result) {
            return result.data;
        }, function (error) {
            throw error;
        });
    }
    function createItem(id, item) {
        return $http.post("/categories/" + id, item)
        .then(function (result) {
            return result.data;
        }, function (error) {
            throw error;
        });
    }
    function editItem(category, id, item) {
        return $http.put("/categories/" + category + "/" + id, item)
        .then(function (result) {
            return result.data;
        }, function (error) {
            throw error;
        });
    }
    function deleteItem(category, id) {
        return $http.delete("/categories/" + category + "/" + id)
        .then(function (result) {
            return result;
        }, function (error) {
            throw error;
        });
    }
    return {
        getCategories: getCategories,
        getItems: getItems,
        getItem: getItem,
        register: register,
        getUserId: getUserId,
        logIn: logIn,
        createItem: createItem,
        editItem: editItem,
        deleteItem: deleteItem,
        logOut: logOut
    };
}]);
