/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

const addBtn = document.getElementById("add-button")
const input = document.getElementById("input-field")

addBtn.addEventListener("click", () => {
    let inputValue = input.value
    console.log(inputValue)
})