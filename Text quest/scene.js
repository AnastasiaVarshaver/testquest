"use strict";
exports.__esModule = true;
exports.levelThree = exports.levelTwo = exports.levelOne = exports.Levels = void 0;
var Levels = /** @class */ (function () {
    function Levels() {
        this.a = ["You wake up in the middle of a dark forest. Fog envelops everything around you. Suddenly a grunt is heard on the right and a frog twice your size appears from behind a tree. You look at the frog in fright, the frog looks at you in fear. "];
        this.b = ["With a wild howl, you rush at the frog and plunge a hunting knife into its paw. Croaking with indignation, the frog swings its other paw to retaliate. "];
        this.c = ["You tried to pet a wild frog. The frog looks displeased and hits you with its hind paw. You fall on your back in surprise. The frog swings at you again. "];
        this.d = ["You roll to the right, hoping to find cover, but bang your head against a hidden in the fog stone. You hear the frog laughing. When you open your eyes, you see the face of a frog hanging over you. "];
        this.e = ["You put your hands up in surrender. The frog looks at you for a while, then nods with satisfaction and limps off into the forest. Seems like you got lucky this time. "];
        this.f = ["You grab the stone you hit your head on and strike the frog back. The frog croaks in surprise and falls unconscious right on top of you. You try to throw its body off you, but the frog is too heavy. Ten hours later, the nearest patrol discovers your cold body, pinned down by a frog. What a ridiculous death. "];
        this.g = ["Goodbye"];
        this.h = ["Game over!"];
    }
    return Levels;
}());
exports.Levels = Levels;
var levelOne = /** @class */ (function () {
    function levelOne() {
        this.a = "a) Hit it with your knife. ";
        this.b = "b) Pet it. ";
    }
    return levelOne;
}());
exports.levelOne = levelOne;
var levelTwo = /** @class */ (function () {
    function levelTwo() {
        this.a = "a) Roll to the right. ";
        this.b = "b) Roll to the left. ";
    }
    return levelTwo;
}());
exports.levelTwo = levelTwo;
var levelThree = /** @class */ (function () {
    function levelThree() {
        this.a = "a) Surrender. ";
        this.b = "b) Try to reach the nearest stone and strike back. ";
    }
    return levelThree;
}());
exports.levelThree = levelThree;
