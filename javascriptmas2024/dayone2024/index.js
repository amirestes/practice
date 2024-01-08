const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    let today = new Date();
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    countdownDisplay.innerText = christmas - today.getDate();
}
 
renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.