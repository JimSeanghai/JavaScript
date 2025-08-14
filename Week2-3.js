const readlineSync = require('readline-sync');

function isSnakeEyes(num1, num2){
    if(num1 == num2){
        console.log("Snake Eye!");
    }else{
        console.log ("Not Snake Eye!");
    }
}

let num1 = Number(readlineSync.question("Enter the First number: "));
let num2 = Number(readlineSync.question("Enter the Second number: "));
isSnakeEyes(num1, num2);