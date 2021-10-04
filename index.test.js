const { test, expect } = require('@jest/globals');

// module imports
const myModule = require('./index');
const sum = myModule.sum;
const capitalize  = myModule.capitalize;
const reverse = myModule.reverse;

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


