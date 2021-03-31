
export class Levels {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
    level6: string;
    level7: string;

    constructor(one: string, two: string, three: string, four: string, five:string, six: string, seven: string) {
        this.level1 = one;
        this.level2 = two;
        this.level3 = three;
        this.level4 = four;
        this.level5 = five;
        this.level6 = six;  
        this.level7 = seven; 
    };
};
export const mainGame = new Levels("You wake up in the middle of a dark forest. Fog envelops everything around you. Suddenly a grunt is heard on the right and a frog twice your size appears from behind a tree. You look at the frog in fright, the frog looks at you in fear. ",
                                        "With a wild howl, you rush at the frog and plunge a hunting knife into its paw. Croaking with indignation, the frog swings its other paw to retaliate. ",
                                         "You tried to pet a wild frog. The frog looks displeased and hits you with its hind paw. You fall on your back in surprise. The frog swings at you again. ",
                                          "You roll to the right, hoping to find cover, but bang your head against a hidden in the fog stone. You hear the frog laughing. When you open your eyes, you see the face of a frog hanging over you. ",
                                         "You roll to the left and find yourself behind a thick tree trunk. Suddenly, behind a tree, you see a small frog. His eyes are teared up, and his legs are shaking in fright. A huge mother-toad appears in front of you again. ",
                                        "You put your hands up in surrender. The frog looks at you for a while, then nods with satisfaction and limps off into the forest. Little frog follows it. Seems like you got lucky this time. ",
                                         "You grab the stone you hit your head on and strike the frog back. The frog croaks in surprise and falls unconscious right on top of you. You try to throw its body off you, but the frog is too heavy. Ten hours later, the nearest patrol discovers your cold body, pinned down by a frog.")

export class LevelOne {
    option1: string;
    option2: string;

     constructor(one: string, two: string,) {
            this.option1 = one;
            this.option2 = two;   
    };
};
export const levelOneOptions = new LevelOne("1. Hit it with your knife. ", "2. Pet it. ");

export class LevelTwo {
    option1: string;
    option2: string;

     constructor(one: string, two: string,) {
            this.option1 = one;
            this.option2 = two;  
    };
};
export const levelTwoOptions = new LevelTwo("1. Roll to the right. ", "2. Roll to the left. ");

export class LevelThree {
    option1: string;
    option2: string;

     constructor(one: string, two: string,) {
            this.option1 = one;
            this.option2 = two; 
    };
};
export const levelThreeOptions = new LevelThree("1. Surrender. ", "2. Try to reach the nearest stone and strike back. ");