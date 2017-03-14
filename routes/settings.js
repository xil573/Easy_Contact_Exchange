var fs = require('fs');
var def_info = require("../myAccount.json");

exports.view = function (req, res) {
    res.render('settings', def_info);
};

exports.addSetting = function (req, res) {
	var ways = req.query;
	console.log(ways);
	def_info.setting[0] = ways;
	var json1 = JSON.stringify(def_info);
    fs.writeFile("myAccount.json", json1, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log(def_info);
            res.render('settings', def_info);
            //console.log("def_info");
        }
    });
}

//please ignore the following function....
exports.addSetting_invalid = function (req, res) {
	console.log(req.query);
	var storeInfo = req.query.way;

	def_info.setting[0].phone = false;
	def_info.setting[0].email = false;
	def_info.setting[0].facebook = false;
	def_info.setting[0].linkedin = false;
	def_info.setting[0].wechat = false;
	def_info.setting[0].instagram = false;
	console.log("reset:");
    console.log(def_info);
	var json1 = JSON.stringify(def_info);
    fs.writeFile("myAccount.json", json1, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("reset done");
            //console.log("def_info");
        }
    });

	for(var i = 0; i < storeInfo.length; i++){
		if(storeInfo[i] == "phone"){
			def_info.setting[0].phone = true;
		}
		else if(storeInfo[i] == "email"){
			def_info.setting[0].email = true;
		}
		else if(storeInfo[i] == "facebook"){
			def_info.setting[0].facebook = true;
		}
		else if(storeInfo[i] == "linkedin"){
			def_info.setting[0].linkedin = true;
		}
		else if(storeInfo[i] == "wechat"){
			def_info.setting[0].wechat = true;
		}
		else if(storeInfo[i] == "instagram"){
			def_info.setting[0].instagram = true;
		}
	}
	console.log("new:");
    console.log(def_info);
	var json2 = JSON.stringify(def_info);
    fs.writeFile("myAccount.json", json2, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("new done");
        }
    });
    res.render('settings');
}