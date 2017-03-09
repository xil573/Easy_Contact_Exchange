var data = require('../users.json');

exports.view = function (req, res) {

    res.render('add-new-account');
};
exports.searchContact = function (req, res) {
	var uname = req.query.search_str;
	var found = false;
	var index;
	console.log(uname);
	for(var i = 0; i < data.user.length; i++){
		//if(uname.toUpperCase() == data.user[i].name.toUpperCase()){
		if(uname == "") break;
		if(data.user[i].name.toUpperCase().indexOf(uname.toUpperCase()) >= 0){
			console.log("Found!");
			console.log("data.user[i].name:", data.user[i].name);
			found = true;
			index = i;
		}else{
			console.log("Not found!");
			console.log("data.user[i].name:", data.user[i].name);
		}
	}
	if(found){
		res.render('search-result', {
    		'newContact': data.user[index].name,
    		'imageURL': data.user[index].imageURL
    	});
	}else{
		res.render('search-result-all', {
			data,
			'searchContact': uname
		});
	}
	res.render('search-result-all', data);
};
