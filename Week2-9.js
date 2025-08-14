const greet = (name) =>{
    str = "Hey "+name+"!";
    return str;
}
const readlineSync = require('readline-sync');
let name = readlineSync.question("Enter person's name: ");
console.log(greet(name));