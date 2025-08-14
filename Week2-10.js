const square = function(num){
    return num*num;
}
const readlineSync= require('readline-sync');
let num = Number(readlineSync.question("Please Enter Number Here: "));

console.log(square(num));
