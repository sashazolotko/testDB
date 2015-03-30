var express = require("express"),
    mysql = require("mysql"),
    bodyParser = require("body-parser"),
    ejs = require("ejs"),
    config = require("./config").db,
    session = require("express-session");
    
var app = express();
app.use(session({
    secret: "ksjdnckjnsck"
}));
app.use(bodyParser());
app.use(express.static('app'));
require("./db").connection(config);

app.use(function (req, res, next) {
    console.log(req.path);
    if (req.path.search(/^\/user/) != -1 && req.session.userID) {
        req.userID = req.session.userID;
        next();
    }
    next();
});
app.use("/categories", require("./routes/categories.js"));
app.use("/user", require("./routes/users.js"));
app.listen(8080);
