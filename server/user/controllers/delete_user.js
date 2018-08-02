var userServices = require('../services/index');
var responseCode = require("../../utils/response_code");
var logger = require("../../utils/logger");

/**
 * Delete User API
 * 
 * METHOD	-	DELETE
 * URL		-	http://<IP>:<PORT>/user
 * REQUEST	-	{"userName":"Shobhit"}
 * 
 */
function deleteUser(request, response, next) {
	var requestData = request.body;

	var responseData = new Object();
	userServices.deleteUser(requestData)
		.then((data) => {
			responseData.responseCode = data.responseCode;
			responseData.responseMessage = data.responseMessage;
			responseData.responseData = data.responseData;

			logger.info("deleteUser API - Response Data - ", responseData);
			response.json(responseData);
		})
		.catch((data) => {
			logger.info("Error - ", data.error);

			responseData.responseCode = data.responseCode;
			responseData.responseMessage = data.responseMessage;

			logger.info("deleteUser API - Response Data - ", responseData);
			response.json(responseData);
		});
}

module.exports = deleteUser;

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
		requestObject.userName = "Shobhit";
		console.log("Request Data - ", requestObject);

		request.body = requestObject;
		deleteUser(request, response);
	})();
}