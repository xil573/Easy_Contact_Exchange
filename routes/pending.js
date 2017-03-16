var data = require('../people.json');
var fs = require('fs');

exports.view = function(req, res) {
	res.render('pending');
}

exports.addNewChris = function (req, res) {
	var newContact = {
		"id": "9",
		"name": "Chris Evens",
		"phone": "889-257-0011",
		"email": "chrisEvens@hollywood.com",
		"imageURL": "http://cdn.conectate.com.do.s3.amazonaws.com/wp-content/uploads/2015/04/Chris-Evans.jpg"			
	};
	console.log(newContact);
	data.person.push(newContact);
	var json = JSON.stringify(data);
    fs.writeFile("people.json", json, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            //res.render('my-profile', data);
            console.log("write");
            res.redirect("select_info");
        }
    });
}

exports.addNewRobert = function (req, res) {
	var newContact = {
		"id": "10",
		"name": "Robert Downey Jr.",
		"phone": "110-287-2211",
		"email": "robertJr@hollywood.com",
		"imageURL": "https://doctorwhowatch.com/files/2016/03/downey.jpg"			
	};
	console.log(newContact);
	data.person.push(newContact);
	var json = JSON.stringify(data);
    fs.writeFile("people.json", json, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            //res.render('my-profile', data);
            console.log("write");
            res.redirect("select_info");
        }
    });
}