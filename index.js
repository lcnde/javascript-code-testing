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

// caesar cipher
function cipher(string, key) {
  let dictionary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let splittedString = string.split("")
  
  // this is the function that swaps indexes and actually does the encrypting for the caesar algorhytm
  function encrypt(i) {
    var index = dictionary.indexOf(splittedString[i])
    index = index + key
    // makes everything start over from A when index exceeds Z
    while ( index > 26 ) {
      index = index - 26
    }
    splittedString[i] = dictionary[index];
  }

  for (let i = 0; i < splittedString.length; i++) {
    if ( dictionary.includes(splittedString[i].toLowerCase()) == false ) { //checks for letters not included in the dictionary (spaces and punctuation)
      splittedString[i] = splittedString[i]
    } else if ( splittedString[i] == splittedString[i].toUpperCase() ) {//check for uppercase letters
      splittedString[i] = splittedString[i].toLowerCase()
      encrypt(i);
      splittedString[i] = splittedString[i].toUpperCase();
    } else {
      encrypt(i);
    }
  }

  return splittedString.join('')
}


// module exports
exports.sum = sum;
exports.capitalize = capitalize;
exports.reverse = reverse;
exports.calculator = calculator;
exports.cipher = cipher;
