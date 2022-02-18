const sum = (array) => {
    if (array.length === 1) {
        return array[0];
    }

    const first = array.shift();
    return first + sum(array);
}



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sum(array));