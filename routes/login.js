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
	var found = false;
	for(var i = 0; i < allUser.users.length; i++){
		if(allUser.users[i].username == uname){
			if(allUser.users[i].password == upass){
				data.users[0] = uname;
				var json = JSON.stringify(data);
				found = true;
				fs.writeFile("people.json", json, 'utf8', function errorCallback(err){
					if (err) {            
            			console.log("wrong");
        			} else {            			
            			console.log("write to people.json");
            			//res.render('index', data);
        			}
    			});
			}else{
				console.log("wrong password!");
				//res.render('wrong');
				//res.send("Wrong password!");
				//res.render('login');
			}
		}else{
			console.log("no such username found!");
			//res.send("Please create a new account!");
			//res.render('login');
		}
	}

	if(found){
		console.log("log in succeed");
		res.render('index', data);
	}
	else{
		res.render('wrong', data);
	}
};

//exports.wrongLogin = function (req, res) {
//	res.send("Wrong username or password!");
//}