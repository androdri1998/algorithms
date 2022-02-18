const count = (array) => {
    if (array[0] === undefined) {
        return 0;
    }

    return 1 + count(array.slice(0, -1));
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(count(array));