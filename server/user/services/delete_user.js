var User = require("../models/users");
var responseCode = require("../../utils/response_code");

function deleteUser(requestObject) {
	return new Promise((resolve, reject) => {
		var responseObject = new Object();
		var query = {userName: requestObject.userName};
		User.findOneAndRemove(query, function (error, data) {
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

module.exports = deleteUser;

// Unit Test Case
if (require.main === module) {
	var requestObject = new Object();
	requestObject.userName = "Shobhit";
	console.log("Request Data - ", requestObject);

	deleteUser(requestObject)
		.then((response) => {
			console.log("Response - ", response);
		})
		.catch((error) => {
			console.log("Error - ", error);
		});
}