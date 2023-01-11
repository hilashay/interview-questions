const lowestNumber = (arr) => {
  let lowestNum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowestNum) {
      lowestNum = arr[i];
    }
  }
  return lowestNum;
};
