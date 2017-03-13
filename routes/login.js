var allUser = require('../user_pw.json');
var data = require("../people.json"); //for contact list and profile name
var fs = require('fs');

exports.view = function (req, res) {
    res.render('login');
};

exports.checkLogin = function (req, res) {
    var uname = req.query.user_name;
	var upass = req.query.user_pass;
	console.log(uname, upass);
	for(var i = 0; i < allUser.users.length; i++){
		if(allUser.users[i].username == uname){
			if(allUser.users[i].password == upass){
				data.users[0] = uname;
				var json = JSON.stringify(data);
				fs.writeFile("people.json", json, 'utf8', function errorCallback(err){
					if (err) {            
            			console.log("wrong");
        			} else {
            			console.log("log in succeed");
            			res.render('index', data);
        			}
    			});
			}else{
				console.log("wrong password!");
				//res.render('login');
			}
		}else{
			console.log("no such username found!");
			//res.render('login');
		}

	}
};