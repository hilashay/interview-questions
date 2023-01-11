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
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      newStr += str[i];
    }
  }

  return newStr;
};
removeDuplicateChar("Learn more javascript dude");
// 'Lnmojvsciptu'
