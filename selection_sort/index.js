const findSmaller = ({ arr = [], }) => {
  let smaller = arr[0];
  let smallerIndex = 0;

  for(let index = 1; index <= arr.length; index++) {
    if(arr[index] < smaller) {
      smaller = arr[index];
      smallerIndex = index;
    }
  }

  return smallerIndex;
}

const selectionSort = ({ arr = [], }) => {
  const newArr = [];

  arr.forEach(item => {
    const smaller = findSmaller({ arr });
    newArr.push(arr[smaller]);
    
    arr = [
      ...arr.slice(0,smaller),
      ...arr.slice(smaller+1)
    ];
  });

  return newArr;
}

// function's use case
console.log(selectionSort({arr: [100, 30, 20, 1, 50, 60, 400]}));
// Output: [
//    1,  20,  30, 50,
//    60, 100, 400
//  ]