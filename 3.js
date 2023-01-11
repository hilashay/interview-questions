// Write a function which accepts a string argument and returns the count of characters
// between the first and last character 'X'

const getTheGapX = (str) => {
  let count = 0;
  if (str[0] !== "X" || str[str.length - 1] !== "X") {
    return -1;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "X") {
      count++;
    }
  }
  return count;
};

// web solution

function getTheGapX(str) {
  if (!str.includes("X")) {
    return -1;
  }

  const firstIndex = str.indexOf("X");
  const lastIndex = str.lastIndexOf("X");
  return firstIndex === lastIndex ? -1 : lastIndex - firstIndex;
}
