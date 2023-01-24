
const hasReachedAllPossibilities = (init: number, end: number) => {
    return init > end;
}

const isEqualItems = (kick: string, item: string) => {
    return kick === item;
}

const isBigger = (kick: string, item: string) => {
    return kick > item;
}

function binarySearch(arr: string[], item: string) {
    let smaller = 0;
    let bigger = arr.length - 1;
    while (!hasReachedAllPossibilities(smaller, bigger)) {
        const middle = Math.trunc((smaller + bigger) / 2);
        const kick = arr[middle];
        if (isEqualItems(kick, item)) {
            return middle;
        }
        if (isBigger(kick, item)) {
            bigger = middle - 1;
        } else {
            smaller = middle + 1;
        }
    }

    return null;
}

function binarySearchRecursive(arr: string[], item: string, init?: number, end?: number): string | number | null {
    let smaller = init || 0;
    let bigger = end || arr.length - 1;

    if (hasReachedAllPossibilities(smaller, bigger)) {
        return null;
    }

    const middle = Math.trunc((smaller + bigger) / 2);
    const kick = arr[middle];
    if (isEqualItems(kick, item)) {
        return middle;
    }
    if (isBigger(kick, item)) {
        bigger = middle - 1;
    } else {
        smaller = middle + 1;
    }

    return binarySearchRecursive(arr, item, smaller, bigger);
}

// function's use case
const myArr = ['cautious', 'chemical', 'eminent', 'fabulous',
    'friendly', 'great', 'harmonious', 'little', 'obvious'];

console.log(`Item: 'little' | result: ${binarySearch(myArr, 'little')}`);
// Output: Item: 'little' | result: 7
console.log(`Item: 'chemical' | result: ${binarySearch(myArr, 'chemical')}`);
// Output: Item: 'chemical' | result: 1
console.log(`Item: 'non-valid-value' | result: ${binarySearch(myArr, 'non-valid-value')}`);
// Output: Item: 'non-valid-value' | result: null

// Using binary search recursive:
console.log(`---------------- Using binary search recursive ----------------`);
console.log(`Item: 'little' | result: ${binarySearchRecursive(myArr, 'little')}`);
// Output: Item: 'little' | result: 7
console.log(`Item: 'chemical' | result: ${binarySearchRecursive(myArr, 'chemical')}`);
// Output: Item: 'chemical' | result: 1
console.log(`Item: 'non-valid-value' | result: ${binarySearchRecursive(myArr, 'non-valid-value')}`);
// Output: Item: 'non-valid-value' | result: null