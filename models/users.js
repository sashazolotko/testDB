var connection = require("../db.js").getConnection();
module.exports = exports = {
    "getByLogin": function (login, cb) {
        connection.query("SELECT * FROM users WHERE login = ?", login, function (error, result) {
            if (error) { return cb(error); }
            cb(null, result.length ? result[0] : null);
        });
    },
    "isNewLogin": function (login, cb) {
        connection.query("SELECT login FROM users WHERE login = ?", login, function (error, result) {
            if (error) { return cb(error); }
            cb (null, result.length ? result[0] : null);
        });
    },
    "add": function (users, cb) {
        connection.query("INSERT INTO users SET ?", users, cb);
    },
    "addToList": function (user, item, cb) {
        
    }
};
