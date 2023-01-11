// Write a program to reverse a string by words. Also show the reverse of each words in place

const split = (str, delimiter) => {
  let temporaryStr = "";
  let strings = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== delimiter) {
      temporaryStr += str[i];
    } else {
      strings.push(temporaryStr);
      temporaryStr = "";
    }
  }
  strings.push(temporaryStr);
  return strings;
};

const reverse = (arr) => {
  let newArr = [];
  let res = "";
  let copyArrLength = arr.length;
  for (let i = 0; i < copyArrLength; i++) {
    res = arr.pop();
    newArr.push(res);
  }

  return newArr;
};

const join = (arr) => {
  let newStr = "";
  arr.map((el) => (newStr += " " + el));

  return newStr;
};

const reverseStringInPlace = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

const reverseString = (str, delimiter) => {
  return reverseStringInPlace(join(reverse(split(str, delimiter))));
};

console.log(reverseString("hila shay's the best at Javascript", " "));

// output: alih s'yahs eht tseb ta tpircsavaJ

// console.log(reverseStringInPlace("hila"));
