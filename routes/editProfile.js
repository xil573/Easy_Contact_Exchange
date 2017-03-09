var fs = require('fs');
var data = require("../myAccount.json");

exports.view = function (req, res) {
    res.render('edit-profile');
}

exports.addInfo = function (req, res) {    
    var name=req.query.type;
	var usage=req.query.usage;
	var content = req.query.content;
	var newFriend={
		"name": name,
		"usage": usage,
		"content": content,			
	};
	console.log(newFriend);
	data.profile.push(newFriend);
	var json = JSON.stringify(data);
    fs.writeFile("myAccount.json", json, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            res.render('my-profile', data);
        }
    });
	//res.render('my-profile');
}