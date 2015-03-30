var connection = require("../db.js").getConnection();

module.exports = exports = {
    "getItems": function (id, cb) {
        connection.query("SELECT * FROM items WHERE category = ?", id, cb);
    },
    "createItem": function (item, cb) {
        connection.query("INSERT INTO items SET ?", item, function (err, result) {
            if (err) { cb(err); }
            item.id = result.insertId;
            cb(null, item);
        });
    }
};
