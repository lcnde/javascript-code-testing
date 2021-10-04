// sum
function sum(a, b) {
  return a + b;
}

// capitalize string
function capitalize(string) {
  capitalizedString = string.replace(string[0], string[0].toUpperCase());
  return capitalizedString
}

// reverse string
function reverse(string) {
  var reversed = string.split("");
  reversed = reversed.reverse();
  reversed = reversed.join("");
  return reversed
};

//calculator
const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  return {
    add,
    subtract,
    divide,
    multiply
  }
})();


// module exports
exports.sum = sum;
exports.capitalize = capitalize;
exports.reverse = reverse;
exports.calculator = calculator;
