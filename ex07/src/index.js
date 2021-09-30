const range = {
max: 100.000,
min: -25.000,
num1: 17.50,
num2: 88.80,
average: 45.325
};
// Only change code below this line

const middle = (range) => (range.max + range.min) /2.0;

// Only change code above this line
console.log(middle(range));
module.exports = middle;