const isFirstNumberGreaterThanSecondNumber = (first, second) => first > second; 
const isNumbersEquals = (first, second) => first === second; 
const calcMiddleIndex = (smallerNumber, biggerNumber) => Math.floor((smallerNumber + biggerNumber) / 2);

const binarySearch = (findNumber, array, smaller, bigger) => {
    if (isFirstNumberGreaterThanSecondNumber(smaller, bigger)) return null;
    const biggerNumber = bigger || array.length - 1;
    const smallerNumber = smaller || 0;

    const middle = calcMiddleIndex(smallerNumber, biggerNumber);
    const middleValue = array[middle];

    if (isNumbersEquals(middleValue, findNumber)) {
        return middle;
    }

    if (isFirstNumberGreaterThanSecondNumber(findNumber, middleValue)) {
        return binarySearch(findNumber, array, middle + 1, biggerNumber);
    }

    if (isFirstNumberGreaterThanSecondNumber(middleValue, findNumber)) {
        return binarySearch(findNumber, array, smallerNumber, middle - 1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const position = binarySearch(10, array);
console.log(position, array[position]);