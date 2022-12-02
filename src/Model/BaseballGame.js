const { MAX_NUMBER, GAME_MESSAGE } = require("../constant/constant");
const computerUniqueThreeNumbers = require("../utils/ComputerUniqueThreeNumbers");

class BaseballGame {
  #ball = 0;
  #strike = 0;

  constructor(userAnswer) {
    this.gameArr = computerUniqueThreeNumbers.generate();
    this.userAnswer = userAnswer.split("").map(Number);
  }

  compareUserToComputer = () => {
    this.gameArr.forEach((ballCount, index) => {
      if (ballCount === this.userAnswer[index]) {
        return (this.#strike += 1);
      }
      if (this.userAnswer.includes(ballCount)) {
        return (this.#ball += 1);
      }
    });
  };

  getBallCount = () => {
    return { ball: this.#ball, strike: this.#strike };
  };

  init = () => {
    this.#ball = 0;
    this.#strike = 0;
  };

  checkBallCount = () => {
    if (this.#strike === MAX_NUMBER) {
      this.init();
      return GAME_MESSAGE.GAME_END;
    } else {
      this.init();
      return GAME_MESSAGE.RETRY;
    }
  };

  retry = () => {};
}

module.exports = BaseballGame;
