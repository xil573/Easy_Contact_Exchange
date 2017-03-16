var data = require('../users.json');
var accInfo = require('../myAccount.json');
var fs = require('fs');

exports.view = function (req, res) {
    res.render('search-result', data);
};

exports.showResult = function(req, res) {
    var uname = req.params.name;
    console.log("in /route:" + uname);
    var results = {
        "res_names": []
    };
    //var uname = req.query.search_str;
    var found = false;
    //var index;
    //console.log(uname);
    for(var i = 0; i < data.user.length; i++){
        //if(uname.toUpperCase() == data.user[i].name.toUpperCase()){
        if(uname == "") break;
        if(data.user[i].name.toUpperCase().indexOf(uname.toUpperCase()) >= 0){
            console.log("Found!");
            console.log("data.user[i].name:", data.user[i].name);
            found = true;
            var curr = {
                "name": data.user[i].name, 
                "url": data.user[i].imageURL
            }
            results.res_names.push(curr);
            console.log(results);
        }else{
            console.log("Not found!");
            console.log("data.user[i].name:", data.user[i].name);
        }
    }
    if(found){
        res.json(results);
    }else{
        console.log("No user found!")
        res.json(results);
    }
}

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