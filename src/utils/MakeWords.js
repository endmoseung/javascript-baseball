const { GAME_MESSAGE } = require("../constant/constant");

const MakeWords = {
  make(strike, ball) {
    if (strike === 0 && ball === 0) return "낫싱";
    const ballText = ball > 0 ? `${ball}${GAME_MESSAGE.BALL}` : "";
    const strikeText = strike > 0 ? `${strike}${GAME_MESSAGE.STRIKE}` : "";
    const space = ball > 0 && strike > 0 ? " " : "";
    return ballText + space + strikeText;
  },
};

module.exports = MakeWords;
