// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = string =>{
    const counts = {}
    let mCharacter = ''
    let mCount = 0

    for(const character of string){
        counts[character] = (counts[character] || 0) + 1;
        if (counts[character] > mCount){
            mCharacter = character
            mCount = counts[character]
        }
    }
    return mCharacter
}


console.log(mostFrequentChar("javascript")); // Expected output: "a"