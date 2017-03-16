var data = require('../people.json');

exports.view = function (req, res) {
    //var id = req.params.id;
    var id = req.params.id;
    console.log("The contact id is: " + id);

    for (i = 0; i < data.person.length; i++){
      if (data.person[i].id == id){
            var conName = data.person[i].name;
            var conPhone = data.person[i].phone;
            var conEmail = data.person[i].email;
            var conImage = data.person[i].imageURL;
            var conWechat = data.person[i].wechat;
            var conFB = data.person[i].facebook;
            //var contact = "Name : " + data.person[i].name + "\n" + "Phone : " + data.person[i].phone + "\n" + "Email : " + data.person[i].email;
            //console.log(contact);
   
        }
    }

    //var contact = JSON.stringify(data);
    //console.log(string);
    res.render('contact', {
        'name': conName,
        'phone': conPhone,
        'email': conEmail,
        'image': conImage,
        'wechat': conWechat,
        'facebook': conFB
    });
};