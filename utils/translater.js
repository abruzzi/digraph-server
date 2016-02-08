var _ = require('lodash');

function translateAttrsFromGraph(graph) {
	var cells = graph.cells;

	graph.cells = _.map(cells, function(cell) {
		var attrs = cell.attrs;
		cell.attrs = _.mapKeys(attrs, function(value, key) {
			return key.replace(/_/g, '.');
		});

		return cell;
	});

	return graph;	
}

module.exports = {
	translateAttrsFromGraph: translateAttrsFromGraph
};