import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifOnly = document.getElementById("gifs-only-option");

emotionRadios.addEventListener("change", highlightCheckedOption);
getImageBtn.addEventListener("click", getMatchingCatsArray);

function highlightCheckedOption(e) {
  const radioClassArray = document.getElementsByClassName("radio");
  for (let radio of radioClassArray) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getMatchingCatsArray() {
  let gifsOnlyCheckbox = false;
  if (gifOnly.checked) {
    gifsOnlyCheckbox = true;
  }
  console.log(gifsOnlyCheckbox);
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    console.log(selectedEmotion);
  }
}

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
