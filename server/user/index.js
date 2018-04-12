var logRequest = require('../utils/log_req');
var user = require('./controllers/index');

module.exports = function(app) {
	app.post("/user", logRequest, user.addUser);
	app.get("/user", logRequest, user.findUserByProperty);
	app.get("/userList", logRequest, user.findUserList);
	app.put("/user", logRequest, user.updateUser);
	app.delete("/user", logRequest, user.deleteUser);
}