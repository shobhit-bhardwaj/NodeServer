var User = require("../models/users");
var logger = require("../../utils/logger");
var responseCode = require("../../utils/response_code");

function findUserByProperty(requestObject, callback) {
	var query = User.find({});
	if(requestObject.status)
		query.where("status").equals(requestObject.status);

	var responseObject = new Object();
	query.exec(function (error, data) {
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

module.exports = findUserByProperty;

// Unit Test Case
if (require.main === module) {
	var requestObject = new Object();
	requestObject.status = "ACTIVE";
	console.log("Request Data - ", requestObject);

	findUserByProperty(requestObject, function(error, responseObject) {
		console.log("Error - ", error);
		console.log("responseObject - ", responseObject);
	});
}