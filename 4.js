// Write a function which returns a list of elements which contains at least one character as digit

const numInStr = (arr) => {
  let pattern = /[0-9]/;
  return arr.filter((el) => {
    return pattern.test(el);
  });
};
