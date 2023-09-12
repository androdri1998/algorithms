const Queue = require("../utils/queue");

const graph = new Map();
graph.set('you', ['alice', 'bob', 'claire']);
graph.set('bob', ['anuj', 'peggy']);
graph.set('alice', ['peggy']);
graph.set('claire', ['thom', 'jonny']);
graph.set('anuj', []);
graph.set('peggy', []);
graph.set('thom', []);
graph.set('tonny', []);

const personAndSeller = ({ name }) => {
    return name[name.length - 1] === 'm';
}

const breadthFirstSearch = ({ graph }) => {
    const searchQueue = new Queue();
    graph.get('you').map(person => searchQueue.enqueue(person));
    const verified = [];

    while (!searchQueue.isEmpty()) {
        const person = searchQueue.dequeue();
        if (!verified.includes(person)) {
            if (personAndSeller({ name: person })) {
                console.log(`${person} is a mango seller.`);
                return true;
            } else {
                graph.get(person).map(person => searchQueue.enqueue(person));
                verified.push(person);
            }
        }
    }

    return false;
}

breadthFirstSearch({ graph });