import { result } from "./scene";
import { firstLevel, secondLevel, thirdLevel, firstLevelOptions, secondLevelOptions, thirdLevelOptions, firstLevelOption } from "./interfaces";
function Game(){
    firstLevel();
    firstLevelOptions();
    if(firstLevelOption == 3){
        result();
        return;
    }
    secondLevel();
    secondLevelOptions();
    thirdLevel();
    thirdLevelOptions();
    result();
};

Game();    

