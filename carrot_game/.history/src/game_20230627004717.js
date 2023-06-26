import Field from "./field.js";
import * as sound from "./sound.js";

export default class Game {
  constructor(gameDuration, carroutCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carroutCount = carroutCount;
    this.bugCount = bugCount;

    this.gameTimer = document.querySelector(".game__timer");
    this.gameScore = document.querySelector(".game__score");

    this.gameBtn = document.querySelector(".game__button");
    this.gameBtn.addEventListener("click", () => {
      if (started) {
        this.stop();
      } else {
        this.start();
      }
    });

    this.gameField = new Field(carroutCount, bugCount);
    this.gameField.setClickListener(this.onItemClick);

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }

  start() {
    this.started = true;
    this.initGame();
    this.showStopButton();
    this.showTimerAndScore();
    this.startGameTimer();
    sound.playBackGround();
  }

  stop() {
    this.started = false;
    this.hideGameButton();
    this.stopGameTimer();
    this.gameFinishBanner.showWithText("REPLAY?");
    sound.playAlert();
    sound.stopBackGround();
  }

  finishGame(win) {
    started = false;
    hideGameButton();
    if (win) {
      sound.playWin();
    } else {
      sound.playBug();
    }
    stopGameTimer();
    sound.stopBackGround();
    gameFinishBanner.showWithText(win ? "YOU WON" : "YOU LOST");
  }

  onItemClick = (item) => {
    if (!this.started) {
      return;
    }

    if (item === "carrot") {
      this.score++;
      this.updateScoreBoard();
      if (score === CARROT_COUNT) {
        this.finishGame(true);
      }
    } else if (item === "bug") {
      this.finishGame(false);
    }
  };
}
