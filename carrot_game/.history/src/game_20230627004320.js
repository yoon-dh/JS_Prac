export default class Game {
  constructor(gameDuration, carroutCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carroutCount = carroutCount;
    this.bugCount = bugCount;

    this.gameBtn = document.querySelector(".game__button");
    this.gameTimer = document.querySelector(".game__timer");
    this.gameScore = document.querySelector(".game__score");

    this.gameField = new Field(carroutCount, bugCount);
    this.gameField.setClickListener(this.onItemClick);

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }

  onItemClick(item) {
    if (!started) {
      return;
    }

    if (item === "carrot") {
      score++;
      updateScoreBoard();
      if (score === CARROT_COUNT) {
        finishGame(true);
      }
    } else if (item === "bug") {
      finishGame(false);
    }
  }
}
