var UserMaster = require("../models/user_master");
var logger = require("../../utils/logger");
var responseCode = require("../../utils/response_code");
var crypto = require('crypto');

function addUser(requestObject, callback) {
	var newUser = new UserMaster({
		userName : requestObject.userName,
		mobileNumber : requestObject.mobileNumber,
		emailId : requestObject.emailId,
		password : crypto.createHash('sha256').update(requestObject.password).digest("hex"),
		personalInfo : {
			firstName : requestObject.urlName,
			lastName : requestObject.metaTitle,
			profilePic : requestObject.profilePic,
			gender : requestObject.gender,
		},
		status : requestObject.status
	});

	var responseObject = new Object();
	newUser.save(function(error, data) {
		if (error) {
			logger.error(error);
			responseObject.responseCode = responseCode.MONGO_ERROR;
			callback(error, responseObject);
			return;
		}
		responseObject.responseCode = responseCode.SUCCESS;
		responseObject.responseData = data;
		callback(null, responseObject);
	});
}

module.exports = addUser;

// Unit Test Case
if (require.main === module) {
	var requestObject = new Object();
	requestObject.userName = "userName";
	requestObject.emailId = "emailId";
	requestObject.mobileNumber = "9988776655";
	requestObject.password = crypto.createHash('md5').update('12345678').digest("hex");
	requestObject.firstName = "firstName";
	requestObject.lastName = "lastName";
	requestObject.status = "ACTIVE";
	console.log(requestObject);

	addUser(requestObject, function(error, responseObject) {
		console.log("Response Code - " + responseObject.responseCode);
		if (error)
			console.log("Error - " + error);
		else
			console.log("Response Data - " + responseObject.responseData);
	});
}