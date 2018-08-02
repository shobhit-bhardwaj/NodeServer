var userServices = require("../services/index");
var responseCode = require("../../utils/response_code");
var logger = require("../../utils/logger");

/**
 * Find User By Property API
 * 
 * METHOD	-	GET
 * URL		-	http://<IP>:<PORT>/user
 * REQUEST	-	?userName=Shobhit&mobileNumber=9988776655&emailId=shobhit.bhardwaj@gmail.com&status=ACTIVE
 * 
 */
function findUserByProperty(request, response, next) {
	var requestData = request.query;

	var responseData = new Object();
	userServices.findUserByProperty(requestData)
		.then((data) => {
			responseData.responseCode = data.responseCode;
			responseData.responseMessage = data.responseMessage;
			responseData.responseData = data.responseData;

			logger.info("findUserByProperty API - Response Data - ", responseData);
			response.json(responseData);
		})
		.catch((data) => {
			logger.info("Error - ", data.error);

			responseData.responseCode = data.responseCode;
			responseData.responseMessage = data.responseMessage;

			logger.info("findUserByProperty API - Response Data - ", responseData);
			response.json(responseData);
		});
}

module.exports = findUserByProperty;

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
		//requestObject.mobileNumber = "9988776655";
		//requestObject.emailId = "shobhit.bhardwaj@gmail.com";
		//requestObject.status = "ACTIVE";
		console.log("Request Data - ", requestObject);

		request.query = requestObject;
		findUserByProperty(request, response);
	})();
}