// Q5: How would you check if a number is an integer?

const isIntegar = (number) => {
  return number % 1 === 0 ? true : false;
};

console.log(isIntegar(20) === true);
console.log(isIntegar(20.5) === false);
