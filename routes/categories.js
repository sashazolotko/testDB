var router = require("express").Router(),
    categories = require("../models/categories.js"),
    items = require("../models/items.js"),
    item = require("../models/item.js");

function collectItemData(data) {
    var item = {};
    if (data.name) {
        item.name = data.name; 
    }
    if (data.description) {
        item.description = data.description;
         
        if (data.styles) {
            item.styles = JSON.stringify(data.styles);
        }
    }
    if (data.category) {
        item.category = data.category; 
    }
    return item;
}

router.get("/", function (req, res, next) {
    categories.getAll(function (err, result) {
        res.send(result);
    });
});
router.route("/:id").get(function (req, res) {
    items.getItems(req.params.id, function (err, result) {
        if (err) {
            return console.log("Error items.");
        } else {
            res.send(result);
        }
    });
}).post(function (req, res) {
    var item = collectItemData(req.body);
    item.category = req.params.id;
    items.createItem(item, function (err, result) {
        if (err) { return console.log(err);}
        res.send(result);
    });
});
router.route("/:id/:item").get(function (req, res) {
    item.getItem(req.params.item, function (error, result) {
        if (error) {
            return console.log("Error item.");
        }
        res.send(result);
    });
}).put(function (req, res) {
    var data = collectItemData(req.body);
    item.putItem(req.params.item, data, function (error, result) {
        if (error) {
            return console.log(error);
        }
        res.send(result);
    });
}).delete(function (req, res) {
    item.deleteItem(req.params.item, function (error) {
        if (error) { return console.log(error); }
        res.end();
    });
});
module.exports = router;