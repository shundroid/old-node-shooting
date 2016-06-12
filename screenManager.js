const util = require("util");
const readline = require("readline");

function ScreenManager() {
  this.texts = [];
  // 画面クリア
  console.log("\033[2J");

  // カーソルを非表示
  // console.log("\033[?25l");

  this.reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  this.reader.on("close", function() {
    // カーソルを表示
    // console.log("\003[?25h");
  });
}

ScreenManager.prototype.addText = function(text, x, y) {
  this.texts.push({ text: text, x: x, y: y });
};

ScreenManager.prototype.draw = function() {
  this.texts.forEach(textItem => {
    this.moveCursor(textItem.x, textItem.y);
    console.log(textItem.text);
  });
  this.texts.splice(0, this.texts.length);
};

// private
ScreenManager.prototype.moveCursor = function(cursorX, cursorY) {
  let sequence = "\033[" + (cursorY + 1) + ";" + cursorX + "H";
  console.log(sequence);
};

module.exports = ScreenManager;
