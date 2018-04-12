var addUserApi = require('./add_user');
var findUserByPropertyApi = require('./find_user_by_property');
var findUserByUserNameApi = require('./find_user_by_username');
var findUserListApi = require('./find_user_list');
var updateUserApi = require('./update_user');
var deleteUserApi = require('./delete_user');

module.exports = {
	addUser : addUserApi,
	findUserByProperty : findUserByPropertyApi,
	findUserByUserName : findUserByUserNameApi,
	findUserList : findUserListApi,
	updateUser : updateUserApi,
	deleteUser : deleteUserApi
}