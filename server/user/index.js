var logRequest = require('../utils/log_req');
var user = require('./controllers/index');

module.exports = function(app) {
	app.post("/addUser", logRequest, user.addUser);
}