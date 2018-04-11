var userServices = require('../services/index');
var responseCode = require("../../utils/response_code");
var logger = require("../../utils/logger");
var crypto = require('crypto');

/**
 * Add User API
 * 
 * METHOD	-	POST
 * URL		-	http://<IP>:<PORT>/addUser
 * REQUEST	-	{"userName":"Shobhit", "password":"12345", "mobileNumber":"9988776655", "emailId":"shobhit.bhardwaj@gmail.com", "status":"ACTIVE"}
 * 
 */
function addUser(request, response, next) {
	var requestData = request.body;

	userServices.addUser(requestData, function(error, data) {
		var responseData = new Object();

		if (error) {
			responseData.responseCode = data.responseCode;
			responseData.responseMessage = data.responseMessage;
		} else {
			responseData.responseCode = data.responseCode;
			responseData.responseMessage = data.responseMessage;
			responseData.responseData = data.responseData;
		}

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
		requestObject.userName = "shobhit";
		requestObject.password = "12345";
		requestObject.mobileNumber = "9988776655";
		requestObject.emailId = "shobhit.bhardwaj@gmail.com";
		requestObject.status = "ACTIVE";
		console.log(requestObject);

		request.body = requestObject;
		addUser(request, response);
	})();
}