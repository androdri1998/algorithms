const largestCommonString = (targetWord, compareWord) => {
    const compareWordLength = compareWord.length;
    const targetWordLength = targetWord.length;
    const tableWord = [];
    let largestCommonStringNumber = 0

    for(let line = 0; line <= compareWordLength - 1; line++) {
        for(let column = 0; column <= targetWordLength - 1; column++) {
            if(!tableWord[line]) {
                tableWord[line] = [];
            }

            if(compareWord[line] === targetWord[column]) {
                const columnAbove = column - 1 < 0 ? 0 : column - 1;
                const leftLine = line - 1 < 0 ? 0 : line - 1;
                const newLargestCommonString = parseInt((tableWord[leftLine][columnAbove] || 0) + 1);
                
                tableWord[line][column] = newLargestCommonString;
                largestCommonStringNumber = 
                    newLargestCommonString > largestCommonStringNumber
                    ? newLargestCommonString
                    : largestCommonStringNumber;
            } else {
                tableWord[line][column] = 0;
            }
        }
    }

    return largestCommonStringNumber;
}

module.exports = largestCommonString;