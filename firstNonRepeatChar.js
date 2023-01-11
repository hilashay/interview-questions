const firstNonRepeatChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
};

// str = "aabbcdd"
// charsCount = {a:1}
const firstNonRepeatChar2 = (str) => {
  let charsCount = {};
  for (let i = 0; i < str.length; i++) {
    // constuct charsCount
    const char = str[i];
    //if char is not in charsCount, add it with 1 as value
    if (!(char in charsCount)) {
      charsCount[char] = 1;
    } else {
      //else (char is in charsCount), increase char's value by 1
      charsCount[char]++;
    }
  }

  // iterate the str once again, and look for the first char that's value in charsCount is 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charsCount[char] === 1) {
      return char;
    }
  }
};

console.log(firstNonRepeatChar("aabbcdd"));
// console.log(firstNonRepeatChar("the quick brown fox jumps then quickly blow air"));
// // outpot expected: "f"
// "aabbcdd"
// {a: 2, b: 2, c:1, d:2}
// if ('t' in obj)
