'use strict'
var mongoose              = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String
})

userSchema.plugin(passportLocalMongoose)
var user = mongoose.model('User', userSchema)

module.exports = user
