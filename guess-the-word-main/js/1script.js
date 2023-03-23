const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
// const span = document.querySelector(span);
const playAgain = document.querySelector(".play-again");
const word = "magnolia";
let letter = letterInput.value;
const message = document.querySelector(".message");
const guessedLetters = [];

//submits the guessed letter from the input
guessButton.addEventListener("click", (e) => {
  e.preventDefault();
  inputValue(letter);

  letterInput.value = "";
});


wordInProgressCircle(word);
makeGuess(letter);

//validates the player's input

function inputValue(input) {
  const acceptedLetter = /[a-zA-Z]/;
  input.length === 0
    ? (message.innerText = "Please enter a letter")
    : input.length > 1
    ? (message.innerText = "Only enter one letter")
    : !input.match(acceptedLetter)
    ? (message.innerText = "Please use letter not a character.")
    : input;
}

//check guessed letter and move to guessed Array
const makeGuess = (letter) => {
  letter = letter.toUpperCase();
  //if the letter is not in the guessed array then i want to add it to the guessed array
  if (!guessedLetters.includes(letter)) {
    guessedLetters.push(letter);
    console.log(guessedLetters);
  } else {
    message.innerText = "Letter already guessed. Try again.";
  }
};
