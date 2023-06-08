// Q7: Make this work
// Problem
// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

const duplicate = (arr) => {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    arr.push(arr[i]);
  }
  return arr;
};
