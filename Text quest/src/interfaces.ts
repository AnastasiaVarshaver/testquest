const customConsole = require('prompt-sync')();
import { levelOneOptions, levelTwoOptions, levelThreeOptions, mainGame }  from "./levels";

export let firstLevelOption: number = 1;
export let secondLevelOption: number = 1;
export let thirdLevelOption: number = 1;
export let HP:number = 100;

export function firstLevel(){
   return console.log(mainGame.level1);
};

export function firstLevelOptions(){
    
    firstLevelOption = customConsole(`
    ${levelOneOptions.option1}
    ${levelOneOptions.option2}
    
    Enter option number and press "Enter"
     
     `);

    while ( firstLevelOption > 2 || firstLevelOption < 1) {
        firstLevelOption = customConsole(`"The number of the option suppose to be between 1 and 2. Please, enter the correct number of option and press "Enter"
    `)};

    if(firstLevelOption == 1){
        HP = 100
        return console.log(mainGame.level2)
    }else if(firstLevelOption == 2){
        HP = 50
        console.log(mainGame.level3)
    };
};
export function secondLevel(){
 };

export function secondLevelOptions(){
        
     secondLevelOption = customConsole(`
     ${levelTwoOptions.option1}
     ${levelTwoOptions.option2}

     Enter option number and press "Enter"
      
      `);

    while ( secondLevelOption > 2 || secondLevelOption < 1) {
        secondLevelOption = customConsole(`"The number of the option suppose to be between 1 and 2. Please, enter the correct number of option and press "Enter"
     `)};

    if(secondLevelOption == 1){
        HP = 50
        return console.log(mainGame.level4)
    }else if(secondLevelOption == 2){
        HP = 50
        return console.log(mainGame.level5)
    };
};


export function thirdLevel(){
 };
export function thirdLevelOptions(){
        
    thirdLevelOption = customConsole(`
     ${levelThreeOptions.option1}
     ${levelThreeOptions.option2}

     Enter option number and press "Enter"
      
      `);

    while ( thirdLevelOption > 2 || thirdLevelOption < 1) {
        thirdLevelOption = customConsole(`"The number of the option suppose to be between 1 and 2. Please, enter the correct number of option and press "Enter"
     `)};
    
     if(thirdLevelOption == 1){
         HP = 50
        return console.log(mainGame.level6)
    }else if(thirdLevelOption == 2){
        HP = 0
        return console.log(mainGame.level7)
    };
};