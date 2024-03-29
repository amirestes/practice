import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnly = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const button = document.getElementById("meme-modal-close-btn");

emotionRadios.addEventListener("change", highlightCheckedOption);
button.addEventListener("click", resetCat);
getImageBtn.addEventListener("click", renderCat);

//Adds a highlight to the selected radio button
function highlightCheckedOption(e) {
  const radioClassArray = document.getElementsByClassName("radio");
  for (let radio of radioClassArray) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

//Close the meme
function resetCat() {
  memeModal.style.display = "none";
}

//Renders to DOM
function renderCat() {
  const catObject = getSingleCatObject();
  memeModalInner.innerHTML = `<img
      class="cat-img"
      src="./images/${catObject.image}"
      alt="${catObject.alt}"
      >`;
  memeModal.style.display = "flex";
}

//Retrieves only one Cat object
function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    let randomCat = catsArray[Math.floor(Math.random() * catsArray.length)];
    return randomCat;
  }
}

function getMatchingCatsArray() {
  //if a radio is checked, it will store the value in a variable called selectedEmotion
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    //if the Gifs Only is checked the value will be saved in a variable called isGiv
    let isGif = gifsOnly.checked;
    //Creates an array called matchingCatsArray with the emotion tags from the catsData object. If the Gifs Only is checked it will return the objects with the same emotion tag if they are a Gif. Otherwise it will return all matching emotion tags
    const matchingCatsArray = catsData.filter((tag) => {
      if (isGif) {
        return tag.emotionTags.includes(selectedEmotion) && tag.isGif;
      } else {
        return tag.emotionTags.includes(selectedEmotion);
      }
    });
    return matchingCatsArray;
  }
}

//Loops over the objects to match the emotion tag
function getEmotionsArray(cats) {
  const emotionArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionArray.includes(emotion)) {
        emotionArray.push(emotion);
      }
    }
  }
  return emotionArray;
}

//Renders the available emotion tags from the objects in a list with a radio button.
function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let emotionStr = "";
  for (let emotion of emotions) {
    emotionStr += `<div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input
          type="radio"
          id="${emotion}" 
          value="${emotion}" 
          name="emotions">
        </div>  `;
  }
  emotionRadios.innerHTML = emotionStr;
}

renderEmotionsRadios(catsData);
