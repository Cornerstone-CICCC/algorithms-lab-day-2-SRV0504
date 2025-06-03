// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = array => {
    const n = array.length + 1
    const expected = (n * (n + 1)) / 2
    const real = array.reduce((sum, num) => sum + num, 0)
    return expected - real
}


console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3