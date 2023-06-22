const message = document.querySelector(".message");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const playAgainButton = document.querySelector(".play-again");
const letterInput = document.querySelector("input");

let word = "magnolia";
//variable for the input value

//convert word to an array to obtain the array length
let originalWord = word.split("");

let guessedArray = [];

const dot = (word) => {
  //create a blank array
  let wordArray = [];
  //Convert word to an array
  wordArray = word.split("");
  //Map over the array to display a dot in the word-in-progress element. Using .splice to replace existing elements with a dot.
  wordArray.map(() => wordArray.splice(wordArray.length, -[wordArray], "●"));
  //Displays the array in the word-in-progress element by using .slice to remove the original word from displaying by using the originalWord array to obtain the length
  wordInProgress.innerText = wordArray.slice(originalWord.length).join("");
};

dot(word);

guessButton.addEventListener("click", (e) => {
  //prevents the form from reloading when the button is pushed
  e.preventDefault();
  //adds guess to the guessedArray
  const guess = letterInput.value;
  //guessedArray.push(guess);
  //resets the input value to an empty string
  letterInput.value = "";

  validateLetter(guess);
  makeGuess(guess);
});

const validateLetter = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    console.log("Please enter a letter");
  } else if (input.length > 1) {
    console.log("Only enter one letter.");
  } else if (!input.match(acceptedLetter)) {
    console.log("Please enter a letter");
  } else {
    return input;
  }
};

// Below the function that checks input, create a new function called makeGuess that accepts a letter as the parameter.
const makeGuess = (guess) => {
  guess = guess.toUpperCase();
  if (guessedArray.includes(guess)) {
    message.innerText = "already guessed";
  } else {
    guessedArray.push(guess);
    guessedLetters.innerText = guessedArray.join(" ");
  }
};
// JavaScript is case sensitive, so it sees uppercase and lowercase letters as different characters. The easiest way to handle case-sensitivity is to convert all letters to one casing. We recommend converting your letter parameter to uppercase. Once the letter transforms to uppercase, check to see if your guessedLetters array already contains that letter.
// If the player already guessed the same letter, update the message to inform the player they’ve already guessed that letter and try again. If they haven’t guessed that letter before, add the letter to the guessedLetters array.
// Log out the guessedLetters array to the console.
// Return to the event handler for the Guess button. Make sure that the variable mapped to the result of the function validates that the player’s input is returning a letter (as opposed to “undefined”). If it’s returning a letter, pass it as an argument to your makeGuess function.
// Try a few letter guesses in the browser window. Ensure you’re seeing the guessedLetters array contents updating as you input new letters and click the button.
// Add and commit your changes with the command line. Push the changes up to GitHub. Copy the link to your repo and submit it below. Part 2 of your project is donzo! ✅
