let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const btn = document.getElementById("btn")
// Use addEventListener() to listen for button clicks
btn.addEventListener("click", () => {
    console.log(data[0].score)
})
// Log Jane's score when the button is clicked (via data)
