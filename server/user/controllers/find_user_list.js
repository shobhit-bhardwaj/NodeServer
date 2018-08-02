var userServices = require("../services/index");
var responseCode = require("../../utils/response_code");
var logger = require("../../utils/logger");

/**
 * Find User List API
 * 
 * METHOD	-	GET
 * URL		-	http://<IP>:<PORT>/userList
 * REQUEST	-	?status=ACTIVE
 * 
 */
function findUserList(request, response, next) {
	var requestData = request.query;

	var responseData = new Object();
	userServices.findUserList(requestData)
		.then((data) => {
			responseData.responseCode = data.responseCode;
			responseData.responseMessage = data.responseMessage;
			responseData.responseData = data.responseData;

			logger.info("findUserList API - Response Data - ", responseData);
			response.json(responseData);
		})
		.catch((data) => {
			logger.info("Error - ", data.error);

			responseData.responseCode = data.responseCode;
			responseData.responseMessage = data.responseMessage;

			logger.info("findUserList API - Response Data - ", responseData);
			response.json(responseData);
		});
}

module.exports = findUserList;

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
		requestObject.status = "ACTIVE";
		console.log("Request Data - ", requestObject);

		request.query = requestObject;
		findUserList(request, response);
	})();
}