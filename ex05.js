// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = string =>
(string.match(/[^aeiou\s\d\W]/gi) || []).length

console.log(countConsonants("hello world")); // Expected output: 7