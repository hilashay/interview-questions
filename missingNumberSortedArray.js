const missingNumberSortedArray = (arr) => {
  let lastNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - lastNumber !== 1) {
      lastNumber = arr[i];
      return lastNumber - 1;
    } else {
      lastNumber = arr[i];
    }
  }
};
