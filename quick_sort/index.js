const quickSort = (array) => {
    if (array.length < 2) {
        return array;
    }

    const randomPosition = Math.floor(Math.random() * array.length);
    const pivo = array[randomPosition];
    const minors = array.filter(item => item < pivo);
    const bigger = array.filter(item => item > pivo);
    return quickSort(minors).concat([pivo].concat(quickSort(bigger)));
}

console.log(quickSort([10, 5, 2, 3, 6]));