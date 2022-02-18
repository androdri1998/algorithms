const binarySearch = (findNumber, array, smaller, bigger) => {
    if (smaller > bigger) return null;
    const biggerNumber = bigger || array.length - 1;
    const smallerNumber = smaller || 0;

    const middle = Math.floor((smallerNumber + biggerNumber) / 2);

    if (array[middle] === findNumber) {
        return middle;
    }

    if (findNumber > array[middle]) {
        return binarySearch(findNumber, array, middle + 1, biggerNumber);
    }
    if (findNumber < array[middle]) {
        return binarySearch(findNumber, array, smallerNumber, middle - 1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const position = binarySearch(4, array);
console.log(position, array[position]);