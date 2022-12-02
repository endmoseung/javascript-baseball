const MissionUtils = require("@woowacourse/mission-utils");
const { MAX_NUMBER } = require("../constant/constant");

const computerUniqueThreeNumbers = {
  generate() {
    const computer = [];
    while (computer.length < MAX_NUMBER) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  },
};

module.exports = computerUniqueThreeNumbers;
