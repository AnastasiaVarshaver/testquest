"use strict";
exports.__esModule = true;
exports.result = void 0;
var color = require('colors');
var interfaces_1 = require("./interfaces");
var win = "Congratulations! You won!";
var lose = "What a ridiculous death. Game over!";
function result() {
    if (interfaces_1.HP > 0) {
        console.log(color.bold.green(win));
    }
    else {
        console.log(color.red(lose));
        return;
    }
    ;
}
exports.result = result;
;
