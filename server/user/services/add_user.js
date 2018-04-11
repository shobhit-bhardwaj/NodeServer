var User = require("../models/users");
var logger = require("../../utils/logger");
var responseCode = require("../../utils/response_code");
var crypto = require('crypto');

function addUser(requestObject, callback) {
	var newUser = new User({
		userName : requestObject.userName,
		password : crypto.createHash('sha256').update(requestObject.password).digest("hex"),
		mobileNumber : requestObject.mobileNumber,
		emailId : requestObject.emailId,
		status : requestObject.status
	});

	var responseObject = new Object();
	newUser.save(function(error, data) {
		if (error) {
			logger.error(error);
			responseObject.responseCode = responseCode.MONGO_ERROR.CODE;
			responseObject.responseMessage = responseCode.MONGO_ERROR.MESSAGE;
			callback(error, responseObject);
			return;
		} else {
			responseObject.responseCode = responseCode.SUCCESS.CODE;
			responseObject.responseMessage = responseCode.SUCCESS.MESSAGE;
			responseObject.responseData = data;
			callback(null, responseObject);
			return;
		}
	});
}

module.exports = addUser;

// Unit Test Case
if (require.main === module) {
	var requestObject = new Object();
	requestObject.userName = "Shobhit";
	requestObject.password = "12345";
	requestObject.mobileNumber = "9988776655";
	requestObject.emailId = "shobhit.bhardwaj@gmail.com";
	requestObject.status = "ACTIVE";
	console.log("Request Data - ", requestObject);

	addUser(requestObject, function(error, responseObject) {
		console.log("Error - ", error);
		console.log("responseObject - ", responseObject);
	});
}