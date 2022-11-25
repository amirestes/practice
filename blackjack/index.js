let firstCard = 6;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards: " + cards;
    // cards[0] + " " + cards[1];

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // console.log("Drawing a new card from the deck!");
  let card = 4;
  sum += card;
  cards.push(card);
  renderGame();
}
