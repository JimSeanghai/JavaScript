function returnDay(num){
    let day = "Monday, Tuesday, Wednesday, Thurday, Friday, Saturday, Sunday";
    let arrDay = day.split(', ');
    if( num <1 || num >7){
        return null;
    }else {
        return arrDay[num-1];
    }

}
const readlineSync = require('readline-sync');
let num = Number(readlineSync.question("Enter the Number: "));

console.log(returnDay(num));
