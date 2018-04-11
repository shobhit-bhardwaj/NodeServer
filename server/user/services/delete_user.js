var User = require("../models/users");
var logger = require("../../utils/logger");
var responseCode = require("../../utils/response_code");

function deleteUser(requestObject, callback) {
	var responseObject = new Object();
	var query = {userName: requestObject.userName};
	User.findOneAndRemove(query, function (error, data) {
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

module.exports = deleteUser;

// Unit Test Case
if (require.main === module) {
	var requestObject = new Object();
	requestObject.userName = "Shobhit";
	console.log("Request Data - ", requestObject);

	deleteUser(requestObject, function(error, responseObject) {
		console.log("Error - ", error);
		console.log("responseObject - ", responseObject);
	});
}