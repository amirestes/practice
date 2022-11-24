let homeScore = 0;
let guestScore = 0;
const homeEl = document.getElementById("home-el");
const guestEl = document.getElementById("guest-el");

homeEl.textContent = homeScore;
guestEl.textContent = guestScore;

function addOneH() {
    homeScore = homeScore + 1
    homeEl.textContent = homeScore;
}

function addTwoH() {
    homeScore = homeScore + 2
    homeEl.textContent = homeScore;
}

function addThreeH() {
    homeScore = homeScore + 3
    homeEl.textContent = homeScore;
}

function addOne() {
    guestScore = guestScore + 1
    guestEl.textContent = guestScore;
}

function addTwo() {
    guestScore = guestScore + 2
    guestEl.textContent = guestScore;
}

function addThree() {
    guestScore = guestScore + 3
    guestEl.textContent = guestScore;
}

function reset() {
   const currentHome = homeScore * 0;
   homeEl.textContent = currentHome;
   const currentGuest = guestScore * 0;
   guestEl.textContent = currentGuest;
}