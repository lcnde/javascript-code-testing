const { test, expect } = require('@jest/globals');

// module imports
const myModule = require('./index');
const sum = myModule.sum;
const capitalize  = myModule.capitalize;

// sum
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).not.toBe(4);
})

//capitalize string
test('capitalizes first letter of string', () => {
  expect(capitalize('hello world')).toBe('Hello world')
});


