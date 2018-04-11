var logger = require("./logger");

function logRequest(request, response, next) {
	logger.info(request.url+" - Request Data - ", request.body);
	next();
	logger.info("API Response - OK");
}

module.exports = logRequest;