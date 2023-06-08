// Q3: How to check if an object is an array or not? Provide some code.

const isTypeArray = (element) => {
  if (typeof element === "object" && element[0]) {
    return true;
  } else {
    return false;
  }
};

console.log(isTypeArray("hila") === false);

console.log(isTypeArray({ name: "hila" }) === false);

console.log(isTypeArray([1, 2, 3]) === true);
