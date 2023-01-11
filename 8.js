//  Write a function to truncate a string to a certain number of letters

const truncateString1 = (str, charCount) => {
  if (str.length < charCount) {
    return str;
  } else {
    return str.slice(0, charCount - 3) + "...";
  }
};
