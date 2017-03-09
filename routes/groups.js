var groupsdata = require('../groups.json');
exports.view = function(req, res) {
	res.render('groups', groupsdata);
}
