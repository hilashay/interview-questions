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

[1, 2, 3, 4, 5, 6, 7][(4, 1, 6, 3, 9, 5, 2, 1)][1];

const largestSum2 = (array) => {
  if (array === undefined) return;
  let largestSum = -Infinity;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] > largestSum) {
        largestSum = array[i] + array[j];
      }
    }
  }
  return largestSum;
};

const largestSum3 = (array) => {
  let largestNumber = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      secondLargest = largestNumber;
      largestNumber = array[i];
    }
    if (array[i] < largestNumber && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }
  return largestNumber + secondLargest;
};

const largestSum4 = (array) => {
  if (array.length < 2) throw Error("at least two chars");
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (current > max) {
      secondMax = max;
      max = current;
    }

    if (current < max && current > secondMax) {
      secondMax = current;
    }
  }
  return max + secondMax;
};
