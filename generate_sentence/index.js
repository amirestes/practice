// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    
        if(desc === "largest countries") {
           console.log(`The ${largestCountries.length} largest countries are ${largestCountries}`)
        } else { 
            console.log(`The ${bestFruit.length} best fruits are ${bestFruit}`)
        }
    }

const largestCountries = ["China", "India", "USA"]
const bestFruit = ["Apples", "Bananas"]
generateSentence("best fruit", bestFruit)
