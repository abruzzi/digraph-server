var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Graph = new Schema({
	cells: [Schema.Types.Mixed]
});

module.exports = mongoose.model('Graph', Graph);