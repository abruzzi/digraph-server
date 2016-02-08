var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Element = new Schema({
    type: String,
    position: {x: Number, y: Number},
    size: {width: Number, height: Number},
    angle: Number,
    embeds: String,
    id: String,
    z: Number,
    attrs: Schema.Types.Mixed
});

module.exports = mongoose.model('Element', Element);