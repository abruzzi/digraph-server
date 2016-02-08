var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Link = new Schema({
    type: String,
    source: {id: String},
    target: {id: String},
    id: String,
    z: Number,
    attrs: Schema.Types.Mixed
});

module.exports = mongoose.model('Link', Link);