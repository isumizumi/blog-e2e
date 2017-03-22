'use strict'
var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: String,
  content: String,
  category: String,
  slug: String
})

var article = mongoose.model('Article', articleSchema)

module.exports = article
