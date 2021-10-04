// sum
function sum(a, b) {
  return a + b;
}

// capitalize string
function capitalize(string) {
  capitalizedString = string.replace("h", "H");
  return capitalizedString
}

// module exports
exports.sum = sum;
exports.capitalize = capitalize;
