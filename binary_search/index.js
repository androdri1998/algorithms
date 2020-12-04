function binarySearch(arr, item) {
  let smaller = 0;
  let bigger = arr.length -1;
  while(smaller <= bigger) {
    const middle = parseInt((smaller + bigger) / 2);
    const kick = arr[middle];
    if(kick === item) {
      return middle;
    }
    if(String(kick) > String(item)) {
      bigger = middle - 1;
    } else {
      smaller = middle + 1;
    }
  }

  return null;
}

// function's use case
myArr = ['cautious', 'chemical', 'eminent', 'fabulous',
          'friendly', 'great', 'harmonious', 'little', 'obvious'];

console.log(`Item: 'little' | result: ${binarySearch(myArr, 'little')}`);
// Output: Item: 'little' | result: 7
console.log(`Item: 'chemical' | result: ${binarySearch(myArr, 'chemical')}`);
// Output: Item: 'chemical' | result: 1
console.log(`Item: 'non-valid-value' | result: ${binarySearch(myArr, 'non-valid-value')}`);
// Output: Item: 'non-valid-value' | result: null