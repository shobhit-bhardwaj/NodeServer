var addUserService = require('./add_user');
var findUserByPropertyService = require('./find_user_by_property');
var findUserListService = require('./find_user_list');
var updateUserService = require('./update_user');
var deleteUserService = require('./delete_user');

module.exports = {
    addUser : addUserService,
	findUserByProperty : findUserByPropertyService,
	findUserList : findUserListService,
	updateUser : updateUserService,
	deleteUser : deleteUserService
}