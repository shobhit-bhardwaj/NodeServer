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
	var requestObject = request.query;

	userServices.findUserList(requestObject, function(error, data) {
		var responseData = new Object();

		if (error) {
			responseData.responseCode = data.responseCode;
			responseData.responseMessage = data.responseMessage;
		} else {
			responseData.responseCode = data.responseCode;
			responseData.responseMessage = data.responseMessage;
			responseData.responseData = data.responseData;
		}

		logger.info("findUserList - Response Data - ", responseData);
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

		request.body = requestObject;
		findUserList(request, response);
	})();
}