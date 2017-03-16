var data = require('../people.json');
var fs = require('fs');
var def_info = require("../myAccount.json");

exports.view = function (req, res) {
    res.render("select_info_chris", def_info);
};
