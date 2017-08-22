var user = require('../user/index');

module.exports.apis = function(app) {
	user(app);
}