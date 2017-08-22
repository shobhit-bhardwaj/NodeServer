var userServices = require('../services/index');
var responseMessage = require("../../utils/response_message");
var responseCode = require("../../utils/response_code");
var logger = require("../../utils/logger");
var crypto = require('crypto');

function addUser(request, response, next) {
	var requestData = request.body;
	// console.log("addUser API :- Request - %j", requestData);

	var responseData = new Object();
	userServices.addUser(requestData, function(error, data) {
		if (error === null) {
			responseData.responseCode = data.responseCode;
			responseData.responseData = data.responseData;
		} else if(data.responseCode !== responseCode.SUCCESS) {
			responseData.responseCode = data.responseCode;
			responseData.responseData = {};
			responseData.responseData.message = responseMessage[data.responseCode];
		} else {
			responseData.responseCode = data.responseCode;
			responseData.responseData = data.responseData;
		}

		logger.info("addUser API :- Response -", responseData);
		response.json(responseData);
	});
}

module.exports = addUser;

// Unit Test Case
if (require.main === module) {
	(function() {
		var request = {};

		var response = {
			json : function(result) {
				console.log(JSON.stringify(result, null, 2));
			}
		};

		var requestObject = new Object();
		requestObject.userName = "userName";
		requestObject.emailId = "emailId";
		requestObject.mobileNumber = "9988776655";
		requestObject.password = crypto.createHash('sha256').update('12345678').digest("hex");
		requestObject.firstName = "firstName";
		requestObject.lastName = "lastName";
		requestObject.status = "ACTIVE";
		console.log(requestObject);

		request.body = requestObject;
		addUser(request, response);
	})();
}