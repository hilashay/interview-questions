const stringChop = (str, chopNumbr) => {
  let newArr = [];
  let newStr = "";
  let strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    if (str === "") {
      return newArr;
    } else {
      newStr = str.slice(0, chopNumbr);
      newArr.push(newStr);
      newStr = "";
      str = str.slice(chopNumbr, str.length);
    }
  }
  return newArr;
};

console.log(stringChop("hilashay", 2));
