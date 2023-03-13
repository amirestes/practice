import { getDiceRollArray } from "./utils.js";

//Character Constructor function
export function Character(data) {
  Object.assign(this, data);

  //Renders random dice to DOM
  this.getDiceHtml = function (diceCount) {
    return getDiceRollArray(diceCount)
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };

  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount } = this;

    const diceHtml = this.getDiceHtml(diceCount);

    return `<div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
           ${diceHtml}
           </div>
        </div>`;
  };
}