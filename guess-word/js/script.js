const message = document.querySelector(".message");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia";

/* 
    Write a function that will create a blank array, then take the variable word and convert the string into the blank array. Display the array as a dot in the word-in-progress.
*/

function dot(word) {
  //create a blank array
  let wordArray = [];
  //Convert word to an array
  wordArray = word.split("");
  //convert word to an array to obtain the array length
  let originalWord = word.split("");
  //Map over the array to display a dot in the word-in-progress element
  wordArray.map(() => wordArray.splice(wordArray.length, -[wordArray], "●"));
  //Displays the array in the word-in-progress element by using .slice to remove the original word from displaying by using the originalWord array to obtain the length
  wordInProgress.innerText = wordArray.slice(originalWord.length).join("");
}

dot(word);
