var user = require("../models/users.js");
var router = require("express").Router();
var crypto = require("crypto");

router
.get("/auth", function (req, res) {
    
    user.getByLogin(req.query.login, function (error, user) {
        if (error) {return console.log(error); }
        if (!user) {res.status(401).end();}
        crypto.pbkdf2(req.query.password, user.salt, 1000, 16, function (err, token) {
            if (err) {
                console.log(err);
            }
            
            if (token.toString("hex") != user.password) {
                return res.status(401).end();
            }
            req.session.user = {
                ott: crypto.randomBytes(8).toString("hex"),
                login: user.login
            };
            req.session.userID = user.id;
            res.send(req.session.user);
        });
    });
})
.get("/logOut", function (req, res) {
    req.session.destroy(function (error) {
        return console.log(error);
    });
    res.end();
})
.get("/", function (req, res) {
    res.send(req.session.userID);
})
.post("/", function (req, res) {
    user.isNewLogin(req.body.login, function (error, result) {
        if(error) { return console.log(error);}
        if(!result) { return; }
        res.send.status("400");
    });
    var salt = crypto.randomBytes(8).toString("hex");
    crypto.pbkdf2(req.body.password, salt, 1000, 16, function (error, token) {
        user.add({
            login: req.body.login,
            password: token.toString("hex"),
            salt: salt,
        }, function (error, result) {
            if (error) { return console.log(error); }
            req.session.user = {
                login: req.body.login,
                ott: crypto.randomBytes(8).toString("hex")
            };
            req.session.userID = result.insertId;
            res.send(req.session.user);
        });
    });
});
module.exports = exports = router;


/*function sum(a, history) {
    history = history || [a];

    var result = function (b) {
        if (!b) {
            return a;
        }
        history.push(b);
        return sum(a + b, history);
    };

    result.valueOf = function () {
        return a;
    };
    result.toString = function () {
        return 'sum(' + history.join(")(") + ')';
    };

    return result;
}*/
