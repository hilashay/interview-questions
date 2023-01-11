// Q. Write a function which checks if a given search text is present either in the beginning of the first name or the second name

const validateName = (str, pattern) => {
  let lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.includes(pattern);
};
