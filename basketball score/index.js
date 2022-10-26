const homeScore = 0;
const guestScore = 0;
const homeEl = document.getElementById("home-el");
const guestEl = document.getElementById("guest-el");

homeEl.textContent = homeScore;
guestEl.textContent = guestScore;

function addOneH() {
    const currentHome = homeScore + 1;
    homeEl.textContent = currentHome;
}

function addTwoH() {
    const currentHome = homeScore + 2;
    homeEl.textContent = currentHome;
}

function addThreeH() {
    const currentHome = homeScore + 3;
    homeEl.textContent = currentHome;
}

// function addOne() {
//     const currentGuest = guestScore + 1;
//     guestEl.textContent = currentGuest;
// }

// function addTwo() {
//     const currentGuest = guestScore + 2;
//     guestEl.textContent = currentGuest;
// }

// function addThree() {
//     const currentGuest = guestScore + 3;
//     guestEl.textContent = currentGuest;
// }

function reset() {
   const currentHome = homeScore * 0;
   homeEl.textContent = currentHome;
   const currentGuest = guestScore * 0;
   guestEl.textContent = currentGuest;
}