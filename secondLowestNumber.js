const secondLowestNumber = (arr) => {
  let lowestNum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowestNum) {
      lowestNum = arr[i];
    }
  }
  arr.splice(arr.indexOf(lowestNum), 1);
  lowestNum = Infinity;

  for (const i in arr) {
    if (arr[i] < lowestNum) {
      lowestNum = arr[i];
    }
  }
  return lowestNum;
};

console.log(secondLowestNumber([4, 2, 5, 6]));
