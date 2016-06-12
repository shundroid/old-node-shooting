const asciiArts = require("./asciiArts");
const ScreenManager = require("./screenManager");

let screenManager = new ScreenManager();
screenManager.addText("hoge", 1, 1);
screenManager.draw();
