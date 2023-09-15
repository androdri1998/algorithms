const { dijkstra, printPath } = require("../dijkstra/dijkstra");

const infinityNumber = Number.POSITIVE_INFINITY;

const graph = new Map();
const costGraph = new Map();
const parentsGraph = new Map();

graph.set('begin', new Map());
graph.get('begin').set('a', 6);
graph.get('begin').set('b', 2);
graph.set('a', new Map());
graph.get('a').set('end', 1);
graph.set('b', new Map());
graph.get('b').set('a', 3);
graph.get('b').set('end', 5);
graph.set('end', new Map());

costGraph.set('a', 6);
costGraph.set('b', 2);
costGraph.set('end', infinityNumber);

parentsGraph.set('a', 'begin');
parentsGraph.set('b', 'begin');
parentsGraph.set('end', null);

printPath(dijkstra({ graph, costGraph, parentsGraph }));
