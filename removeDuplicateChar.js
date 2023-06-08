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
  }

  return newStr;
};
console.log(removeDuplicateChar("Learn more javascript dude"));

("mother fucker");
const removeDuplicateChar3 = (string) => {
  const countStrings = {};
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!countStrings[char]) {
      countStrings[char] = 0;
    }
    countStrings[char]++;
  }
  // {m:1,}
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (countStrings[char] === 1) {
      newString += char;
    }
  }
  return newString;
};

// לממש את הפונקציה כך שתחזיר את הסטרינג בלי הכפילויות הנוספות לדוגמא: "aaabbb" יחזיר "ab"
const removeDuplicateChar2 = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!newStr.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
};
// console.log(removeDuplicateChar2("aaaabbb") === "ab");

const removeDuplicateCharIdan = (string) => {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    const currentStr = string[i];
    if (!newStr.includes(currentStr)) {
      newStr += currentStr;
    }
  }
  return newStr;
};

console.log(removeDuplicateCharIdan("bbiiibiibiibi") === "bi");

const removeDuplicateCharHila = (string) => {
  const charCount = {};
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!charCount[char]) {
      charCount[char] = 0;
    }
    charCount[char]++;
  }
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charCount[char] === 1) {
      newStr += char;
    }
  }
  return newStr;
};
console.log(removeDuplicateCharHila("i love sefki") === "lovsfk");
