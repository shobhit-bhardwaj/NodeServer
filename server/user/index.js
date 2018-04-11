var logRequest = require('../utils/log_req');
var user = require('./controllers/index');

module.exports = function(app) {
	app.post("/addUser", logRequest, user.addUser);
	app.post("/findUserByProperty", logRequest, user.findUserByProperty);
	app.post("/findUserList", logRequest, user.findUserList);
	app.post("/updateUser", logRequest, user.updateUser);
	app.post("/deleteUser", logRequest, user.deleteUser);
}