const multiply = (num1, num2) =>{

    return num1*num2;
}
const readlineSync = require('readline-sync');
let num1 = Number(readlineSync.question("Enter the First Number: "));
let num2 = Number(readlineSync.question("Enter the Second Number: "));

console.log(multiply(num1, num2));
