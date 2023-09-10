const isEmptyArray = (array) => array.length === 0;
const removeLastItem = (array) => {
    const cloneArray = [];
    for(let index = 0; index <= array.length - 2; index++) {
        cloneArray[index] = array[index];
    }

    return cloneArray;
};

const count = (array) => {
    if (isEmptyArray(array)) {
        return 0;
    }

    const nextArray = removeLastItem(array);

    return 1 + count(nextArray);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(count(array));