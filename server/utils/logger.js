var config = require("../config/config");

var Logger = require(NODE_PATH + 'bunyan');
var pathModule = require('path');
var log = new Logger({
	name : 'AppLogger',
	streams : [ {
		level : 'trace',
		stream : process.stdout
	}, {
		level : 'trace',
		path : pathModule.join(__dirname, config.logConfig.log_file_path)
	} ]
});

module.exports =  log;