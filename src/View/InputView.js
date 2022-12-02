const { Console } = require("@woowacourse/mission-utils");
const { ANNOUNCEMENT_MESSAGE } = require("../constant/constant");
const Validation = require("../utils/Validation");

const InputView = {
  readUserNumber(callback) {
    Console.readLine(ANNOUNCEMENT_MESSAGE.INPUT, (userAnswer) => {
      Validation.checkUserValid(userAnswer);
      return callback(userAnswer);
    });
  },

  readGameCommand(callback) {
    Console.readLine(ANNOUNCEMENT_MESSAGE.RESTART.MESSAGE, (userAnswer) => {
      Validation.checkUserRetry(userAnswer);
      callback(userAnswer);
    });
  },
};

module.exports = InputView;
