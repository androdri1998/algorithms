function findMinor(arr: number[]) {
    let minorIndex = 0;

    arr.forEach((item, index) => {
        if (item < arr[minorIndex]) {
            minorIndex = index;
        }
    });

    return minorIndex;
}

function selectionSortRecursion(arr: number[]): number[] {
    if (arr.length === 1) {
        return arr;
    }

    const minor = findMinor(arr);
    return arr
        .splice(minor, 1)
        .concat(selectionSortRecursion(arr));
}

function selectionSortMethod(arr: number[]) {
    const sortedArr: number[] = [];

    arr.forEach(_ => {
        const minor = findMinor(arr);
        sortedArr.push(arr[minor]);

        arr = [
            ...arr.slice(0, minor),
            ...arr.slice(minor + 1)
        ];
    });

    return sortedArr;
}

// function's use case
console.log(selectionSortMethod([100, 30, 20, 1, 50, 60, 400]));
// Output: [
//    1,  20,  30, 50,
//    60, 100, 400
//  ]
console.log(selectionSortRecursion([100, 30, 20, 1, 50, 60, 400]));
// Output: [
//    1,  20,  30, 50,
//    60, 100, 400
//  ]