const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
// const span = document.querySelector(span);
const playAgain = document.querySelector(".play-again");
const message = document.querySelector(".message");

const word = "magnolia";

const guessedLetters = [];

//converts the word to a string and replaces each character with a circle
const wordInProgressCircle = () => {
  //string convert to an array
  //change the items in the array into a circle
  const circleArray = word
    .split("")
    .map((letter) => {
      return "●";
    })
    .join("");
  // display in word in progress
  wordInProgress.innerText = circleArray;
};

wordInProgressCircle(word);

guessButton.addEventListener("click", (e) => {
  e.preventDefault();
  let letter = letterInput.value;
  const correctGuess = inputValue(letter);
});

const inputValue = (input) => {
  const acceptedLetter = /[a-zA-Z]/;
  input.length === 0
    ? (message.innerText = "Please enter a letter")
    : input.length > 1
    ? (message.innerText = "Only enter one letter")
    : !input.match(acceptedLetter)
    ? (message.innerText = "Please use letter not a character.")
    : input;
};
