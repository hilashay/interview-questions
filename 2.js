// Write a code to replace all the spaces of the string with underscores

const joinAndReplace = (str, seprator) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (newStr !== "") {
      newStr += seprator + str[i];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

joinAndReplace(["hila", "shay", "idan", "haviv"], "_");
// output: 'hila_shay_idan_haviv'
