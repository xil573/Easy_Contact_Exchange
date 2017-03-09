var data = require("../myAccount.json");

exports.view = function (req, res) {    
    //var id = req.params.id.toString();  
    //var userProfile = require('../' + id + '.json');
    //console.log(userProfile);
    //res.render('my-profile', userProfile);
    res.render('my-profile', data);
};

exports.togglePublic = function (req, res) {
    var id = req.params.id.toString();  
    var idi = req.params.idi.toString();  
    var userProfile = require('../' + id + '.json');
    var public = userProfile.selfInfos[idi-1].public;
    if (public == "public") {
        userProfile.selfInfos[idi-1].public = "private";
    } else {
        userProfile.selfInfos[idi-1].public = "public";
    }
}