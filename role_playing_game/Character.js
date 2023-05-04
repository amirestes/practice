import {
  getDicePlaceholderHtml,
  getDiceRollArray,
  getPercentage,
} from "./utils.js";

//Character Constructor function
function Character(data) {
  Object.assign(this, data);
  this.diceHtml = getDicePlaceholderHtml(this.diceCount);

  this.maxHealth = this.health;

  //Renders random dice to DOM
  this.setDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceHtml = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };

  //Renders take damage
  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (total, num) => total + num
    );
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
  };

  this.getHealthBarHtml = function () {
    const percent = getPercentage(this.health, this.maxHealth);
    return `<div class='health-bar-outer'>
      <div class='health-bar-inner ${percent < 26 ? "danger" : ""}'
      style='width: ${percent}%'></div>
      </div>`;
  };

  //Renders HTML
  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount, diceHtml } = this;
    const healthBar = this.getHealthBarHtml();
    return `
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <div class="health">health: <b> ${health} </b></div>
        ${healthBar}
        <div class="dice-container">
           ${diceHtml}
           </div>
        </div>`;
  };
}

export default Character;
