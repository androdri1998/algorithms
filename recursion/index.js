function findKey({ arr = [], currentPosition }) {
  

  if(arr.length === currentPosition || 
      !arr || currentPosition === null || 
      currentPosition === undefined) {
    return null;
  }

  if(String(arr[currentPosition]) === "box_with_key") {
    return currentPosition;
  }

  return findKey({ arr, currentPosition: currentPosition + 1 });
}

// function's use case
const myArrWithKey = ["box_without_key", "box_without_key", "box_without_key",
  "box_without_key", "box_with_key", "box_without_key", "box_without_key",
  "box_without_key"]
const myArrWithoutKey = ["box_without_key", "box_without_key", "box_without_key",
  "box_without_key", "box_without_key", "box_without_key", "box_without_key"]

const indexKeyFromMyArrWithKey = findKey({ 
  arr: myArrWithKey, currentPosition: 0 
});
const indexKeyFromMyArrWithoutKey = findKey({ 
  arr: myArrWithoutKey, currentPosition: 0 
});

if(indexKeyFromMyArrWithKey !== null){
  console.log(`Box with key found on index: ${indexKeyFromMyArrWithKey}`);
} else {
  console.log("Box with key not found");
}
// Output: Box with key found on index: 4

if(indexKeyFromMyArrWithoutKey !== null){
  console.log(`Box with key found on index: ${indexKeyFromMyArrWithoutKey}`);
} else {
  console.log("Box with key not found");
}
// Output: Box with key not found