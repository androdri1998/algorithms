const largestCommonSubsequence = (targetWord, compareWord) => {
    const compareWordLength = compareWord.length;
    const targetWordLength = targetWord.length;
    const tableWord = [];
    let largestCommonSubsequenceNumber = 0

    for(let line = 0; line <= compareWordLength - 1; line++) {
        for(let column = 0; column <= targetWordLength - 1; column++) {
            if(!tableWord[line]) {
                tableWord[line] = [];
            }

            if(compareWord[line] === targetWord[column]) {
                const columnAbove = column - 1 < 0 ? 0 : column - 1;
                const leftLine = line - 1 < 0 ? 0 : line - 1;
                const newLargestCommonSequence = parseInt((tableWord[leftLine][columnAbove] || 0) + 1);
                
                tableWord[line][column] = newLargestCommonSequence;
                largestCommonSubsequenceNumber = 
                    newLargestCommonSequence > largestCommonSubsequenceNumber
                    ? newLargestCommonSequence
                    : largestCommonSubsequenceNumber;
            } else {
                const columnAbove = column - 1 < 0 ? 0 : column - 1;
                const leftLine = line - 1 < 0 ? 0 : line - 1;
                const leftLineItem = tableWord[leftLine][column] || 0;
                const aboveColumnItem = tableWord[line][columnAbove] || 0;

                tableWord[line][column] = Math.max(leftLineItem, aboveColumnItem);
            }
        }
    }

    return largestCommonSubsequenceNumber;
}

module.exports = largestCommonSubsequence;