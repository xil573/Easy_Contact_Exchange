var fs = require('fs');
var data = require("../people.json"); //for contact list and profile name
var data2 = require("../users.json"); //for search
var user_pw = require("../user_pw.json");  //for name - pw storing

exports.view = function (req, res) {
    res.render('create-new-account');
};

exports.createNewUser = function (req, res) {
	var uname = req.query.user_name;
	var upass = req.query.password;
	var newUser = {
		"username": uname,
		"password": upass
	}

	var newUser2 = {
		"id": "200",
		"name": uname,
		"phone": "unknown",
		"email": "unknown",
		"imageURL": "https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png"
	}
	//console.log(newUser);
	data2.user.push(newUser2);
	user_pw.users.push(newUser);
	//data.users.push(newUser);
	data.users[0] = uname;

	//write into search file
	var json2 = JSON.stringify(data2);
	fs.writeFile("users.json", json2, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("write into users.json");
        }
    });

	//write into user-pwd file
	var json3 = JSON.stringify(user_pw);
	fs.writeFile("user_pw.json", json3, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("write into user_pw.json");
        }
    });

	//write into contact and profile name file
	var json = JSON.stringify(data);
	fs.writeFile("people.json", json, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            res.render('index', data);
        }
    });
};