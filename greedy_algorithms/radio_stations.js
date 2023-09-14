let includedStates = new Set(['ce','al','pi','rn','ba','pb','se','ma']);
const stations = new Map();
const finalStations = new Set();

stations.set('station_one', new Set(['pi', 'ba', 'se']));
stations.set('station_two', new Set(['ce', 'pi', 'pb']));
stations.set('station_three', new Set(['rn', 'ba', 'al']));
stations.set('station_four', new Set(['ba', 'se']));
stations.set('station_five', new Set(['al', 'ma']));

const intersection = (firstSet, secondSet) => {
    const _intersection = new Set();
    for(let item of secondSet) {
        if(firstSet.has(item)) {
            _intersection.add(item);
        }
    }

    return _intersection;
}

const diff = (firstSet, secondSet) => {
    const _diff = new Set(firstSet);
    for(let item of secondSet) {
        _diff.delete(item);
    }

    return _diff;
}

while(includedStates.size > 0) {
    let bestStation = null;
    let coveredStates = new Set();

    for(let [station, states] of stations) {
        const covered = intersection(includedStates, states);
        if(covered.size > coveredStates.size) {
            bestStation = station;
            coveredStates = covered;
        }
    }

    includedStates = diff(includedStates, coveredStates);
    finalStations.add(bestStation);
}

console.log(`The best statios to cover states are: `, finalStations);