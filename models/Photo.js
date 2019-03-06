/**
 * Schema
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var photoSchema = new Schema({

  path:  { type: String },
  caption: { type: String },
  almbum: {type: String},
  date: {type: Date}
  });

module.exports = mongoose.model('Photos', photoSchema);

