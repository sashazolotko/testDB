var mysql = require("mysql"),
    cnct = null;
exports.connection = function (config) {
    cnct = mysql.createConnection(config);
    cnct.connect(function (err) {
        if (!err) {
            console.log(config.database + " connected.");
        } else {
            console.log("Error connect to " + config.database);
            console.log(err);
        }
    });
};
exports.getConnection = function () {
    return cnct;
};
