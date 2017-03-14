var def_info = require("../myAccount.json");

exports.view = function (req, res) {
    res.render('select_info', def_info);
};