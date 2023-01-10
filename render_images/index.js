// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const imgContainer = document.getElementById("container")
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function imgGenerator () {
    for ( let i = 0; i < imgs.length; i++ ) {
        imgContainer.innerHTML += `<img class="team-img" src="${imgs[i]}">`
    }
}

imgGenerator()