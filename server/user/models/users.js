require("../../utils/mongo_util");var logger = require("../../utils/logger");var mongoose = require("mongoose");var autoIncrement = require('mongoose-auto-increment');var UserSchema = new mongoose.Schema({	userId: {type: Number, unique: true},	userName: {type: String, unique: true},	password: {type: String},	mobileNumber: {type: String, unique: true},	emailId: {type: String, unique: true},	status: {type: String, enum: ['ACTIVE', 'INACTIVE','BLOCK']},	createAt: {type: Date, default: Date.now},	updateAt: {type: Date}});module.exports = mongoose.model('User', UserSchema, "users");UserSchema.plugin(autoIncrement.plugin, {	model: 'User',	field: 'userId',	startAt: 1,	incrementBy: 1});