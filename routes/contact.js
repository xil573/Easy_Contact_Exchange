var data = require('../people.json');

exports.view = function (req, res) {
	//var id = req.params.id;
	var id = req.params.id;
	console.log("The contact id is: " + id);

	for (i = 0; i < data.person.length; i++){
      if (data.person[i].id == id){
            
            var contact = "Name : " + data.person[i].name + "\n" + "Phone : " + data.person[i].phone + "\n" + "Email : " + data.person[i].email;
            console.log(contact);
   
        }
    }

    //var contact = JSON.stringify(data);
    //console.log(string);
    res.render('contact', {
    	'contactName': contact
    });
};