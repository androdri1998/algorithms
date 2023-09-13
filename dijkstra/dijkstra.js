const findLowerCost = (costs = new Map(), verified = []) => {
    let lowerCost = Number.POSITIVE_INFINITY;
    let nodeLowerCost = null;
    
    for(let [node, value] of costs.entries()) {
        if(value < lowerCost && !verified.includes(node)) {
            lowerCost = value;
            nodeLowerCost = node;
        }
    }

    return nodeLowerCost;
};

const dijkstra = ({ graph, costGraph, parentsGraph }) => {
    const verified = [];

    let node = findLowerCost(costGraph, verified);
    while(node !== null) {
        const cost = costGraph.get(node);
        const neigborhood = graph.get(node);
        for(let [nodeNeighborhood, value] of neigborhood.entries()) {
            const newCost = cost + value;
            if(costGraph.get(nodeNeighborhood) > newCost) {
                costGraph.set(nodeNeighborhood, newCost);
                parentsGraph.set(nodeNeighborhood, node);
            }
        }
        
        verified.push(node);
        node = findLowerCost(costGraph, verified);
    }

    return { parentsGraph, costGraph };
}

const printPath = ({ parentsGraph, costGraph }) => {
    let node = 'end';
    while(node !== 'begin') {
        const cost  = costGraph.get(node);
        const parent = parentsGraph.get(node);
        console.log(`It's need '${cost}' minutes to arrive at '${node}' from '${parent}'`);
        node = parentsGraph.get(node);
    }
}

module.exports = {
    dijkstra,
    printPath,
}