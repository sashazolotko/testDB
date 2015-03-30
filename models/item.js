var connection = require("../db.js").getConnection();
module.exports = exports = {
    "getItem": function (itemId, cb) {
        return connection.query("SELECT * FROM items WHERE id=?", itemId, function (err, result) {
            if (err) {return err;}
            cb(null, result.length ? result[0] : null);
        });    
    },
    "putItem": function (id, item, cb) {
        return connection.query("UPDATE items SET ? WHERE items.id = ?", [item, id], function (error, result) {
            if (error) { return error;}
            cb(null, result);
        });
    },
    "deleteItem": function (id, cb) {
        connection.beginTransaction(function (err) {
            connection.query("DELETE FROM items WHERE id = ?", id, function (error) {
                if (error) {
                    connection.rollback(function () {
                        cb(error);
                    });
                }
                connection.commit(function () {
                    if (error) {
                        connection.rollback(function () {
                            cb(error);
                        });
                    }
                    cb();
                });
            });
        });
    }
};
