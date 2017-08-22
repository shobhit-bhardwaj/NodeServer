var config = require("./server/config/config");
var logger = require("./server/utils/logger");
var fs = require("fs");
var path = require("path");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require(NODE_PATH + 'cors');
var compress = require(NODE_PATH + 'compression');

var app = express();
app.use(compress());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var route = require('./server/routes/routes.js');
route.apis(app);

app.listen(config.serverConfig.port, function(error) {
	if(error)
		logger.info("Error in Server Startup - "+error);
	else
		logger.info("Server Start on PORT - "+config.serverConfig.port);
		
});