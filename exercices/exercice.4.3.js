const max = (array) => {
    let maxNumber = array[0];
    const findMax = (source) => {
        if (!source.length) {
            return maxNumber;
        }

        const numberToCompare = source.shift();
        if (numberToCompare > maxNumber) {
            maxNumber = numberToCompare;
        }

        return findMax(source);
    }

    return findMax(array);
}

const array = [1, 2, 3, 4, 5, 20, 6, 7, 8, 9, 10, 11];
console.log(max(array));