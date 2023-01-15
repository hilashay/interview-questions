// Question: How would you find the largest sum of any two elements?

const largestSum = (arr) => {
  let largestNum = 0;
  let secondLargesNum = 0;
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char > largestNum) {
      largestNum = char;
    }
  }
  arr.splice(arr.indexOf(largestNum), 1);

  for (let i = 0; i < arr.length; i++) {
    let secondChar = arr[i];
    if (secondChar > secondLargesNum) {
      secondLargesNum = secondChar;
    }
  }
  return largestNum + secondLargesNum;
};
