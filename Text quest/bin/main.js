"use strict";
exports.__esModule = true;
var scene_1 = require("./scene");
var interfaces_1 = require("./interfaces");
function Game() {
    interfaces_1.firstLevel();
    interfaces_1.firstLevelOptions();
    if (interfaces_1.firstLevelOption == 3) {
        scene_1.result();
        return;
    }
    interfaces_1.secondLevel();
    interfaces_1.secondLevelOptions();
    interfaces_1.thirdLevel();
    interfaces_1.thirdLevelOptions();
    scene_1.result();
}
;
Game();
