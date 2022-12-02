const BaseballGame = require("../Model/BaseballGame");
const InputView = require("../View/InputView");
const StaticView = require("../View/StaticView");
const OutputView = require("../View/OutputView");
const MakeWords = require("../utils/MakeWords");
const { GAME_MESSAGE, ANNOUNCEMENT_MESSAGE } = require("../constant/constant");

class BaseballController {
  play() {
    this.printStart();
  }

  printStart = () => {
    StaticView.printStart();
    this.getUserNumber();
  };

  getUserNumber = () => {
    InputView.readUserNumber((userAnswer) => {
      this.baseballGame = new BaseballGame(userAnswer);
      this.playGame();
    });
  };

  getNewNumber = () => {
    InputView.readUserNumber((userAnswer) => {
      this.baseballGame.userAnswer = userAnswer.split("").map(Number);
      this.playGame();
    });
  };

  playGame = () => {
    this.baseballGame.compareUserToComputer();
    this.printResult();
    const gameResult = this.baseballGame.checkBallCount();
    this.decideGame(gameResult);
  };

  printResult = () => {
    const ballCount = this.baseballGame.getBallCount();
    const printingMessage = MakeWords.make(ballCount.strike, ballCount.ball);
    OutputView.printResult(printingMessage);
    this.decideGame(this.baseballGame.checkBallCount());
  };

  decideGame = (gameResult) => {
    if (gameResult === GAME_MESSAGE.RETRY) {
      this.retry();
    } else {
      this.getNewNumber();
    }
  };

  retry = () => {
    StaticView.printGameEnd();
    InputView.readGameCommand((userAnswer) => {
      if (userAnswer === ANNOUNCEMENT_MESSAGE.RESTART.START) {
        this.getUserNumber();
      } else {
        this.applicationEnd();
      }
    });
  };

  applicationEnd = () => {
    StaticView.end();
  };
}

module.exports = BaseballController;
