// const stringChop = (str, chopNumbr) => {
//   let newArr = [];
//   let newStr = "";
//   let strLength = str.length;
//   for (let i = 0; i < strLength; i++) {
//     if (str === "") {
//       return newArr;
//     } else {
//       newStr = str.slice(0, chopNumbr);
//       newArr.push(newStr);
//       newStr = "";
//       str = str.slice(chopNumbr, str.length);
//     }
//   }
//   return newArr;
// };

// console.log(stringChop("hilashay", 2));

const stringChop = (str, chopNumbr) => {
  let newArr = [];
  let newStr = "";
  let counter = 0;
  let strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    if (counter !== chopNumbr) {
      newStr += str[i];
      counter++;
    } else {
      counter = 0;
      newArr.push(newStr);
      newStr = "";
      newStr += str[i];
      counter++;
    }
  }
  newArr.push(newStr);
  return newArr;
};

console.log(stringChop("hilashay", 2));
//לפתור בלי סלייס.
