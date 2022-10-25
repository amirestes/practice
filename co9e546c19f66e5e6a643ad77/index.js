// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

function errorMessage() {
    // console.log("I've been clicked!")
    const error = document.getElementById("error")
    error.textContent = "Something went wrong, please try again"
}
