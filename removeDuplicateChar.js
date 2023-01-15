// const removeDuplicateChar = (str) => {
//   let charCount = {};
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] in charCount) {
//       charCount[str[i]]++;
//     } else {
//       charCount[str[i]] = 1;
//     }
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (charCount[str[i]] === 1) {
//       newStr += str[i];
//     }
//   }

//   return newStr;
// };
// removeDuplicateChar("Learn more javascript dude");
// // 'Lnmojvsciptu'
// console.log(removeDuplicateChar("Learn more javascript dude") === "Lnmojvsciptu");

// לשפר את הקוד ללואה אחת
const removeDuplicateChar = (str) => {
  let charCount = {};
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] in charCount) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
    if (charCount[str[i]] === 1) {
      newStr += str[i];
    }
  }

  return newStr;
};
console.log(removeDuplicateChar("Learn more javascript dude"));
// לממש את הפונקציה כך שתחזיר את הסטרינג בלי הכפילויות הנוספות לדוגמא: "aaabbb" יחזיר "ab"
