const lowestNumber = (arr) => {
  let lowestNum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowestNum) {
      lowestNum = arr[i];
    }
  }
  return lowestNum;
};

// const secondLowestNumber = (arr) => {
//   let lowestNum = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < lowestNum) {
//       lowestNum = arr[i];
//     }
//   }
//   arr.splice(arr.indexOf(lowestNum), 1);
//   lowestNum = Infinity;

//   for (const i in arr) {
//     if (arr[i] < lowestNum) {
//       lowestNum = arr[i];
//     }
//   }
//   return lowestNum;
// };

// console.log(secondLowestNumber([4, 2, 5, 6]));

//לבדוק מקרי קצה

// const secondLowestNumber = (arr) => {
//   let lowestNum = Infinity;
//   for (let i = 0; i < arr.length + 1; i++) {
//     if (arr.length === 0 || arr.length === 1) {
//       return "No second number";
//     }
//     if (arr[i] < lowestNum) {
//       lowestNum = arr[i];
//     }
//   }
//   arr.splice(arr.indexOf(lowestNum), 1);
//   lowestNum = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < lowestNum) {
//       lowestNum = arr[i];
//     }
//   }
//   return lowestNum;
// };

// console.log(secondLowestNumber([2, 3, 4, 5]) === 3);

// להוציא לפונקציה את הקוד הרפטטיבי

const secondLowestNumber2 = (arr) => {
  let lowestNum = lowestNumber(arr);
  let secondLowestNum = 0;
  if (arr.length === 0 || arr.length === 1) {
    return "No second number";
  }
  arr.splice(arr.indexOf(lowestNum), 1);
  lowestNum = Infinity;

  secondLowestNum = lowestNumber(arr);
  return secondLowestNum;
};

// console.log(secondLowestNumber2([2, 3, 4, 5]) === 3);

// משימת המשך נפרדת: לממש את הפונקציה בפור לופ אחד ובלי ספלייס.(בלי לשנות את המערך)

// const secondLowestNumber3 = (arr) => {
//   if (arr.length === 0 || arr.length === 1) {
//     return "No second number";
//   }
//   arr.sort();
//   return arr[1];
// };

// console.log(secondLowestNumber3([2, 3, 4, 5]) === 3);

const secondLowestNumber4 = (arr) => {
  let min = Infinity;
  let secondMin = Infinity;
  if (arr.length === 0 || arr.length === 1) {
    return "No second number";
  }
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    if (char < min) {
      secondMin = min;
      min = char;
    }
    if (char > min && char < secondMin) {
      secondMin = char;
    }
  }
  return secondMin;
};

// console.log(secondLowestNumber4([2, 3, 4, 5]) === 3);

const secondMin = (array) => {
  if (array.length < 2) return undefined;
  let min = Infinity;
  let secondMin = Infinity;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (current < min) {
      secondMin = min; //inf // 88
      min = current; // 88 // 8
    }

    if (current > min && current < secondMin) {
      secondMin = current;
    }
  }
  return secondMin;
};

// console.log(secondMin([8, 8, 8, 8, 8]) === 8);
console.log(secondMin([1, 1, 1, 1]));
