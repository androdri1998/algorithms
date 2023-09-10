const removeFirstItem = (array) => {
    const cloneArray = [];
    let cloneArrayIndex = 0;
    for(let index = 1; index <= array.length - 1; index++) {
        cloneArray[cloneArrayIndex] = array[index];
        cloneArrayIndex++;
    }

    return cloneArray;
};

const isEmptyArray = (array) => array.length === 0;
const isFirstNumberGreaterThanSecondNumber = (first, second) => first > second; 

const findMaxNumber = (array, max = 0) => {
    if(isEmptyArray(array)) {
        return max;
    }

    let maxNumber = max;
    const firstNumber = array[0];
    const nextArray = removeFirstItem(array);

    if(isFirstNumberGreaterThanSecondNumber(firstNumber, maxNumber)) {
        maxNumber = firstNumber;
    }

    return findMaxNumber(nextArray, maxNumber);
};

const array = [1, 2, 3, 4, 5, 20, 6, 7, 8, 9, 10, 11];
console.log(findMaxNumber(array));