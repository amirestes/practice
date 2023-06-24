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

const makeGuess = (guess) => {
  guess = guess.toUpperCase();
  if (guessedArray.includes(guess)) {
    message.innerText = "You've already guessed this letter, guess again.";
  } else {
    guessedArray.push(guess);
    guessedLetters.innerText = guessedArray.join(" ");
  }
  displayGuess(guessedArray);
};

const displayGuess = (guessedArray) => {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const correctAnswer = [];
  for (const letter of wordArray) {
    if (guessedArray.includes(letter)) {
      correctAnswer.push(letter.toUpperCase());
    } else {
      correctAnswer.push("●");
    }
  }
  wordInProgress.innerText = correctAnswer.join("");
};
