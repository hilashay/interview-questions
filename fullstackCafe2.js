// Q4: How to empty an array in JavaScript?

const emptyArr = (arr) => {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    arr.pop(arr[i]);
  }
  return arr;
};

const emptyArr2 = (arr) => {
  return arr.splice(0, arr.length);
};
