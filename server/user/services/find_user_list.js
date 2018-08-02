var User = require("../models/users");
var responseCode = require("../../utils/response_code");

function findUserByProperty(requestObject) {
	return new Promise((resolve, reject) => {
		var query = User.find({});
		if(requestObject.status)
			query.where("status").equals(requestObject.status);

		var responseObject = new Object();
		query.exec(function (error, data) {
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

module.exports = findUserByProperty;

// Unit Test Case
if (require.main === module) {
	var requestObject = new Object();
	requestObject.status = "ACTIVE";
	console.log("Request Data - ", requestObject);

	findUserByProperty(requestObject)
		.then((response) => {
			console.log("Response - ", response);
		})
		.catch((error) => {
			console.log("Error - ", error);
		});
}