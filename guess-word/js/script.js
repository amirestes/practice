const message = document.querySelector(".message");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const playAgainButton = document.querySelector(".play-again");
const letterInput = document.querySelector("input");

let word = "magnolia";
//convert word to an array to obtain the array length
let originalWord = word.split("");

let guessedArray = [];

const dot = (word) => {
  //create a blank array
  let wordArray = [];
  //Convert word to an array
  wordArray = word.split("");
  //Map over the array to display a dot in the word-in-progress element
  wordArray.map(() => wordArray.splice(wordArray.length, -[wordArray], "●"));
  //Displays the array in the word-in-progress element by using .slice to remove the original word from displaying by using the originalWord array to obtain the length
  wordInProgress.innerText = wordArray.slice(originalWord.length).join("");
};

dot(word);

guessButton.addEventListener("click", (e) => {
  //prevents the form from reloading when the button is pushed
  e.preventDefault();
  //variable for the input value
  const guess = letterInput.value;
  //adds guess to the guessedArray
  guessedArray.push(guess);
  //resets the input value to an empty string
  letterInput.value = "";
});

/* 
    Validate the letterInput is a letter.
    const acceptedLetter = /[a-zA-Z]/;
*/
