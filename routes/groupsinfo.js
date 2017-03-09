var group_info = require('../groups.json');

exports.gInfo = function(req, res) {
	var gid = req.params.id;
	console.log(gid);
	//gid = parseInt(gid);
	var groupinfo = group_info.group[gid-1];
	console.log(groupinfo);
	res.json(groupinfo);
}