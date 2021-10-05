const { test, expect } = require('@jest/globals');

// module imports
const myModule = require('./index');
const sum = myModule.sum;
const capitalize  = myModule.capitalize;
const reverse = myModule.reverse;
const calculator = myModule.calculator;
const cipher = myModule.cipher;

// sum
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toBe(4);
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).not.toBe(4);
})

// capitalize string
test('capitalizes first letter of string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
  expect(capitalize('sally sells seashells')).toBe('Sally sells seashells')
});

// reverse string
test('reverse the string', () => {
  expect(reverse('Hello')).toBe('olleH');
  expect(reverse('Sally sells seashells by the seashore'))
    .toBe('erohsaes eht yb sllehsaes slles yllaS');
});

// calculator
test('add 4 + 4', () => {
  expect(calculator.add(4, 4)).toBe(8);
});
test('subtract 10 - 5', () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});
test('divide 20 / 5', () => {
  expect(calculator.divide(20, 5)).toBe(4);
});
test('multiply', () => {
  expect(calculator.multiply(6, 6)).toBe(36);
});

// caesar cipher
test('caesar', () => {
  expect(cipher('Hello, world!', 5)).toBe('Mjqqt, btwqi!')
})

test('cipher without spaces, punctuation or uppsercase letters', () => {
  expect(cipher('hello', 5)).toBe('mjqqt')
})

test('cipher should transform z into e', () => {
  expect(cipher('z', 5)).toBe('e')
});
