const createVotingList = () => {
    const votingList = new Map();

    const checkAlreadyVoteByName = ({ name }) => {
        const alreadyVote = votingList.get(name);
        return alreadyVote ? true : false;
    }

    const addVote = ({ name }) => {
        votingList.set(name, true);
        return true;
    }

    const vote = ({ name }) => {
        if (checkAlreadyVoteByName({ name })) {
            console.log(`${name} already voted`);
            return false;
        }

        console.log(`${name} haven't voted yet`);
        addVote({ name });
        return true;
    }

    return { addVote, checkAlreadyVoteByName, vote };
}

const votingList = createVotingList();
console.log(votingList.vote({ name: 'tom' }));
console.log(votingList.vote({ name: 'mike' }));
console.log(votingList.vote({ name: 'mike' }));
