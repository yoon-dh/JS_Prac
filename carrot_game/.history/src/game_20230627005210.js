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

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
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
    sound.playAlert();
    sound.stopBackGround();
    this.onGameStop && this.onGameStop("cancel");
  }

  finishGame(win) {
    this.started = false;
    this.hideGameButton();
    if (win) {
      sound.playWin();
    } else {
      sound.playBug();
    }
    this.stopGameTimer();
    sound.stopBackGround();
    this.onGameStop && this.onGameStop(win ? "win" : "lose");
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

  hideGameButton() {
    gameBtn.style.visibility = "hidden";
  }
  
   showStopButton() {
    const icon = gameBtn.querySelector(".fas");
    icon.classList.add("fa-stop");
    icon.classList.remove("fa-play");
    this.gameBtn.style.visibility = "visible";
  }
  
   showTimerAndScore() {
    this.gameTimer.style.visibility = "visible";
    this.gameScore.style.visibility = "visible";
  }
  
   startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
      if (remainingTimeSec <= 0) {
        clearInterval(timer);
        finishGame(CARROT_COUNT === score);
        return;
      }
      updateTimerText(--remainingTimeSec);
    }, 1000);
  }
  
  stopGameTimer() {
    clearInterval(timer);
  }
  
  updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
  }
  
 initGame() {
    score = 0;
    gameScore.innerText = CARROT_COUNT;
    gameField.init();
  }
  
  function updateScoreBoard() {
    gameScore.innerText = CARROT_COUNT - score;
  }
  
}
