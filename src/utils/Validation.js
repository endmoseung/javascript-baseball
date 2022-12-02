const { MAX_NUMBER, ERROR_MESSAGE } = require("../constant/constant");

function isIncludeZero(userAnswer) {
  if (userAnswer.indexOf(0) !== -1) throw ERROR_MESSAGE.IS_INCLUDE_ZERO;
}

function isNan(userAnswer) {
  if (isNaN(userAnswer)) {
    throw ERROR_MESSAGE.IS_NUMBER;
  }
}

function isMaxNumber(userAnswer) {
  if (userAnswer.length !== MAX_NUMBER) {
    throw ERROR_MESSAGE.IS_MAX_NUMBER;
  }
}

function isRepetition(userAnswer) {
  const setAnswer = new Set(userAnswer);

  if (setAnswer.size !== MAX_NUMBER) {
    throw ERROR_MESSAGE.IS_REPETITION;
  }
}

const Validation = {
  checkUserValid(userAnswer) {
    isIncludeZero(userAnswer);
    isNan(userAnswer);
    isMaxNumber(userAnswer);
    isRepetition(userAnswer);
  },

  checkUserRetry(userAnswer) {
    if (!/^[1-2]/.test(Number(userAnswer))) throw ERROR_MESSAGE.IS_RESTART;
  },
};

module.exports = Validation;
