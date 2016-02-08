var express = require('express');
var bodyParser = require('body-parser')
var _ = require('lodash');

var app = express();

app.use(bodyParser.json())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('interact with to /api/graph maybe');
});

var Graph = require('./models/graph');

app.get('/api/graph', function(req, res, next) {
	Graph.find(function(err, graphs) {
		if(err){
			return next(err);
		}

		var gs = _.map(graphs, function(graph) {
			var cells = graph.cells;

			graph.cells = _.map(cells, function(cell) {
				var attrs = cell.attrs;
				cell.attrs = _.mapKeys(attrs, function(value, key) {
					return key.replace(/_/g, '.');
				});

				return cell;
			});

			return graph;
		});

		console.log(JSON.stringify(gs));

		res.status(200).json(gs);
	});
});

app.post('/api/graph', function(req, res, next) {

	var cells = _.map(req.body.cells, function(cell) {
		var attrs = cell.attrs;

		cell.attrs = _.mapKeys(attrs, function(value, key) {
			return key.replace(/\./g, '_');
		})
		
		return cell;
	});

	var graph = new Graph({
		cells: cells
	});

	graph.save(function(err, graph) {
		if(err) {
			return next(err);
		}

		res.status(201).json(graph);
	});
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});