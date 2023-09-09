'use strict';

const findSmaller = ({ arr = [], }) => {
  let smaller = arr[0];
  let smallerIndex = 0;

  for (let index = 1; index <= arr.length; index++) {
    if (arr[index] < smaller) {
      smaller = arr[index];
      smallerIndex = index;
    }
  }

  return smallerIndex;
}

const selectionSort = ({ arr = [], }) => {
  const orderedArray = [];

  let arrClone = arr.concat();
  let length = arr.length;

  for(let index = 0;index <= length - 1;index++) {
    const smaller = findSmaller({ arr: arrClone });
    orderedArray.push(arrClone[smaller]);

    const copyArr = [];
    for(let internalIndex = 0; internalIndex <= arrClone.length - 1; internalIndex++) {
      if(internalIndex !== smaller) {
        copyArr.push(arrClone[internalIndex]);
      }
    }

    arrClone = copyArr.concat();
  }

  return orderedArray;
}

// function's use case
console.log(selectionSort({ arr: [100, 30, 20, 1, 50, 60, 400] }));
// Output: [
//    1,  20,  30, 50,
//    60, 100, 400
//  ]