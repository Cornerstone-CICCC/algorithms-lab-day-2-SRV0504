// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(str) {
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word[0].toUpperCase() + word.slice(1);
    }
    return words.join(" ");

}

console.log(capitalizeWords("hello world"))

