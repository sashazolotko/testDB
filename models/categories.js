var connection = require("../db.js").getConnection();
module.exports = exports = {
    "getAll": function (cb) {
        connection.query("SELECT * FROM categories", cb);    
    }  
};
