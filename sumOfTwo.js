// const sunOfTwo = (arr, number) => {
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === number) counter++;
//     }
//   }

//   return counter >= 1 ? true : false;
// };
console.log(sunOfTwo([6, 4, 3, 2, 1, 7], 9) === true);
console.log(sunOfTwo([6, 4, 3, 2, 1, 7], 2) === false);
