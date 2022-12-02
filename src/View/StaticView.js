const { Console } = require("@woowacourse/mission-utils");
const { ANNOUNCEMENT_MESSAGE } = require("../constant/constant");

const StaticView = {
  printStart() {
    Console.print(ANNOUNCEMENT_MESSAGE.START);
  },

  printGameEnd() {
    Console.print(ANNOUNCEMENT_MESSAGE.END);
  },

  end() {
    Console.close();
  },
};

module.exports = StaticView;
