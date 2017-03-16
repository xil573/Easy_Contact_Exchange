var data = require('../people.json');
var fs = require('fs');

exports.view = function (req, res) {
    res.render('done_chris');
};
exports.addNewChris = function (req, res) {
	var newContact = {
		"id": "9",
		"name": "Chris Evens",
		"phone": "889-257-0011",
		"email": "chrisEvens@hollywood.com",
		"imageURL": "http://cdn.conectate.com.do.s3.amazonaws.com/wp-content/uploads/2015/04/Chris-Evans.jpg"			
	};
	console.log(newContact);
    var len = data.person.length;
    var found = false;
    for(var i = 0; i < len; i++){
        if(data.person[i].name == "Chris Evens"){
            found = true;
            break;
        }
    }
    if(found){
        res.render('done_chris');
    }
	else{
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
                res.render('done_chris');
            }
        });
    }
}