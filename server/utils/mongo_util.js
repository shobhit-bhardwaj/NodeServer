var logger = require("../utils/logger");
var config = require("../config/config");

var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
var urlString = config.mongoConfig.urlString;
var connection = mongoose.connect(urlString);
autoIncrement.initialize(connection);

var db = mongoose.connection;
db.on("error", logger.error);