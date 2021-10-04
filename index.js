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



// module exports
exports.sum = sum;
exports.capitalize = capitalize;
exports.reverse = reverse;
