import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const emotionArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionArray.push(emotion);
    }
  }
  return emotionArray;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let emotionStr = "";
  for (let emotion of emotions) {
    emotionStr += `<p>${emotion}</p>`;
  }
  emotionRadios.innerHTML = emotionStr;
}

renderEmotionsRadios(catsData);
