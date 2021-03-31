const color = require('colors');
import { HP } from "./interfaces"

let win:string = "Congratulations! You won!"
let lose:string = "What a ridiculous death. Game over!"
export function result(){
    if(HP > 0){
        console.log(win)
    }else{
        return console.log(lose);
  
    };
    
};

