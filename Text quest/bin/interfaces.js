"use strict";
exports.__esModule = true;
exports.thirdLevelOptions = exports.thirdLevel = exports.secondLevelOptions = exports.secondLevel = exports.firstLevelOptions = exports.firstLevel = exports.HP = exports.thirdLevelOption = exports.secondLevelOption = exports.firstLevelOption = void 0;
var customConsole = require('prompt-sync')();
var levels_1 = require("./levels");
exports.firstLevelOption = 1;
exports.secondLevelOption = 1;
exports.thirdLevelOption = 1;
exports.HP = 100;
function firstLevel() {
    return console.log(levels_1.mainInterface.level1);
}
exports.firstLevel = firstLevel;
;
function firstLevelOptions() {
    exports.firstLevelOption = customConsole("\n    " + levels_1.levelOneOptions.option1 + "\n    " + levels_1.levelOneOptions.option2 + "\n    \n    Enter option number and press \"Enter\"\n     \n     ");
    while (exports.firstLevelOption > 2 || exports.firstLevelOption < 1) {
        exports.firstLevelOption = customConsole("\"The number of the option suppose to be between 1 and 2. Please, enter the correct number of option and press \"Enter\"\n    ");
    }
    ;
    if (exports.firstLevelOption == 1) {
        exports.HP = 100;
        return console.log(levels_1.mainInterface.level2);
    }
    else if (exports.firstLevelOption == 2) {
        exports.HP = 50;
        console.log(levels_1.mainInterface.level3);
    }
    ;
}
exports.firstLevelOptions = firstLevelOptions;
;
function secondLevel() {
}
exports.secondLevel = secondLevel;
;
function secondLevelOptions() {
    exports.secondLevelOption = customConsole("\n     " + levels_1.levelTwoOptions.option1 + "\n     " + levels_1.levelTwoOptions.option2 + "\n\n     Enter option number and press \"Enter\"\n      \n      ");
    while (exports.secondLevelOption > 2 || exports.secondLevelOption < 1) {
        exports.secondLevelOption = customConsole("\"The number of the option suppose to be between 1 and 2. Please, enter the correct number of option and press \"Enter\"\n     ");
    }
    ;
    if (exports.secondLevelOption == 1) {
        exports.HP = 50;
        return console.log(levels_1.mainInterface.level4);
    }
    else if (exports.secondLevelOption == 2) {
        exports.HP = 50;
        return console.log(levels_1.mainInterface.level5);
    }
    ;
}
exports.secondLevelOptions = secondLevelOptions;
;
function thirdLevel() {
}
exports.thirdLevel = thirdLevel;
;
function thirdLevelOptions() {
    exports.thirdLevelOption = customConsole("\n     " + levels_1.levelThreeOptions.option1 + "\n     " + levels_1.levelThreeOptions.option2 + "\n\n     Enter option number and press \"Enter\"\n      \n      ");
    while (exports.thirdLevelOption > 2 || exports.thirdLevelOption < 1) {
        exports.thirdLevelOption = customConsole("\"The number of the option suppose to be between 1 and 2. Please, enter the correct number of option and press \"Enter\"\n     ");
    }
    ;
    if (exports.thirdLevelOption == 1) {
        exports.HP = 50;
        return console.log(levels_1.mainInterface.level6);
    }
    else if (exports.thirdLevelOption == 2) {
        exports.HP = 0;
        return console.log(levels_1.mainInterface.level7);
    }
    ;
}
exports.thirdLevelOptions = thirdLevelOptions;
;
