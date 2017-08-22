var config = require("../config/config");
var pathModule = require('path');
var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
	transports: [
		new winston.transports.Console({
			level: config.logConfig.console_level,
			handleExceptions: true,
			json: false,
			colorize: true
		}),
		new winston.transports.File({
			level: config.logConfig.file_level,
			filename: pathModule.join(__dirname,config.logConfig.log_file_path),
			handleExceptions: true,
			json: true,
			maxsize: config.logConfig.file_max_size,
			maxFiles: config.logConfig.file_max_files,
			colorize: true
		})
	],
	exitOnError: false
});

module.exports = logger;
module.exports.stream = {
	write: function(message, encoding) {
		logger.info(message);
	}
};