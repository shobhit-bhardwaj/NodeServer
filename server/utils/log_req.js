var logger = require("./logger");

function logRequest(request, response, next) {
	logger.info(request.url+" - Request Data - ", request.body);
	next();
	logger.info("addUser API :- Response - OK");
}

module.exports = logRequest;