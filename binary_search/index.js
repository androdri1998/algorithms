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

console.log(binarySearch(myArr, 'little'));
console.log(binarySearch(myArr, 'chemical'));
console.log(binarySearch(myArr, 'non-valid-value'));