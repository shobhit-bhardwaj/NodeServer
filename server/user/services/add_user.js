var User = require("../models/users");
var responseCode = require("../../utils/response_code");
var crypto = require('crypto');

function addUser(requestObject) {
	return new Promise((resolve, reject) => {
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
				responseObject.error = error;
				responseObject.responseCode = responseCode.MONGO_ERROR.CODE;
				responseObject.responseMessage = responseCode.MONGO_ERROR.MESSAGE;
				reject(responseObject);
			} else {
				responseObject.responseCode = responseCode.SUCCESS.CODE;
				responseObject.responseMessage = responseCode.SUCCESS.MESSAGE;
				responseObject.responseData = data;
				resolve(responseObject);
			}
		});
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

	addUser(requestObject)
		.then((response) => {
			console.log("Response - ", response);
		})
		.catch((error) => {
			console.log("Error - ", error);
		});
}