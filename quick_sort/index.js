const drawPosition = (array) => Math.floor(Math.random() * array.length);
const isFirstNumberGreaterThanSecondNumber = (first, second) => first > second;
const getMinors = (array, drawnNumber) => {
    const minors = [];
    for(let index = 0; index <= array.length - 1; index++) {
        const itemValue = array[index];
        if(isFirstNumberGreaterThanSecondNumber(drawnNumber, itemValue)) {
            minors.push(itemValue);
        }
    }

    return minors;
}

const getGreaters = (array, drawnNumber) => {
    const greaters = [];
    for(let index = 0; index <= array.length - 1; index++) {
        const itemValue = array[index];
        if(isFirstNumberGreaterThanSecondNumber(itemValue, drawnNumber)) {
            greaters.push(itemValue);
        }
    }

    return greaters;
}

const quickSort = (array) => {
    if (isFirstNumberGreaterThanSecondNumber(2, array.length)) {
        return array;
    }

    const randomPosition = drawPosition(array);
    const pivot = array[randomPosition];
    const minors = getMinors(array, pivot);
    const greaters = getGreaters(array, pivot);

    return [...quickSort(minors), pivot, ...quickSort(greaters)];
}

console.log(quickSort([10, 5, 2, 3, 6]));