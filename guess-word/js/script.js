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

//Event Listener when the guess button is pushed that stores the input value in a variable
guessButton.addEventListener("click", (e) => {
  //prevents the form from reloading when the button is pushed
  e.preventDefault();
  //assigns the input value to a variable
  const guess = letterInput.value;
  //resets the input value to an empty string
  letterInput.value = "";

  validateLetter(guess);
  makeGuess(guess);
});

//Function to check that one letter was entered
const validateLetter = function (input) {
  const acceptedLetter = /[a-zA-Z]/; //regex
  if (input.length === 0) {
    message.innerText = "Please enter a letter";
  } else if (input.length > 1) {
    message.innerText = "Only enter one letter.";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter";
  } else {
    return input;
  }
};

//Function to check if the letter has been guessed and if not to add it to the array to display guessed letters
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

//Function to display the guessed letters and display when a correct letter was guessed within the word.
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
  winGame();
};

//Function to determine if the player has won
const winGame = () => {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
  }
};
