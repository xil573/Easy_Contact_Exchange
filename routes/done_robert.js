var data = require('../people.json');
var fs = require('fs');

exports.view = function (req, res) {
    res.render('done_robert');
};
exports.addNewRobert = function (req, res) {
	var newContact = {
		"id": "10",
		"name": "Robert Downey Jr.",
		"phone": "110-287-2211",
		"email": "robertJr@hollywood.com",
		"imageURL": "https://doctorwhowatch.com/files/2016/03/downey.jpg"			
	};
	console.log(newContact);
    var len = data.person.length;
    var found = false;
    for(var i = 0; i < len; i++){
        if(data.person[i].name == "Robert Downey Jr."){
            found = true;
            break;
        }
    }
    if(found){
        res.render('done_robert');
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
                res.render('done_robert');
            }
         });
    }
}