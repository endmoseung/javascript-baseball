const BaseballController = require("./Controller/BaseballController");

class App {
  play() {
    new BaseballController().play();
  }
}

const app = new App();
app.play();

module.exports = App;
