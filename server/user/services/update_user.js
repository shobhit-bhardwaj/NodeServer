var User = require("../models/users");
var logger = require("../../utils/logger");
var responseCode = require("../../utils/response_code");
var crypto = require('crypto');

function updateUser(requestObject, callback) {
	return new Promise((resolve, reject) => {
		var updateObject = new Object();
		if(requestObject.password)
			updateObject.password = crypto.createHash('sha256').update(requestObject.password).digest("hex");
		if(requestObject.mobileNumber)
			updateObject.mobileNumber = requestObject.mobileNumber;
		if(requestObject.emailId)
			updateObject.emailId = requestObject.emailId;
		if(requestObject.status)
			updateObject.status = requestObject.status;
		updateObject.updateAt = new Date();

		var query = {userName: requestObject.userName};
		User.findOneAndUpdate(query, updateObject, function (error, data) {
			var responseObject = new Object();
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

module.exports = updateUser;

// Unit Test Case
if (require.main === module) {
	var requestObject = new Object();
	requestObject.userName = "Shobhit";
	//requestObject.password = "12345";
	//requestObject.mobileNumber = "9988776655";
	//requestObject.emailId = "shobhit.bhardwaj@gmail.com";
	requestObject.status = "ACTIVE";
	console.log("Request Data - ", requestObject);

	updateUser(requestObject)
		.then((response) => {
			console.log("Response - ", response);
		})
		.catch((error) => {
			console.log("Error - ", error);
		});
}