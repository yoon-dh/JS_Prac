"use strict";

import PopUp from "./popup.js";
import Game from "./game.js";

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
});

const game = new Game(5, 2, 2);
game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case "cancel":
      message = "Replay?";
      break;
    case "win":
      message = "YOU WON";
      break;
    case "lose":
      message = "YOU LOST";
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});
