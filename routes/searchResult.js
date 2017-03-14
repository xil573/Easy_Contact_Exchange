var data = require('../users.json');
var accInfo = require('../myAccount.json');
var fs = require('fs');

exports.view = function (req, res) {
    res.render('search-result', data);
};

exports.storeRecp = function (req, res) {
	var receipient = req.query;
	console.log(receipient);
	accInfo.recp[0] = receipient;
	var json = JSON.stringify(accInfo);
    fs.writeFile("myAccount.json", json, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log(accInfo);
            res.render('search-result', data);
            //console.log("def_info");
        }
    });
}