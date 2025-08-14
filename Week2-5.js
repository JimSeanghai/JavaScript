
const isShortsWeather = (temperature) =>{
    if(temperature >= 35){
        return true;
    }else {
        return false;
    }
}
const readlineSync = require('readline-sync');

let tem = Number(readlineSync.question("Enter the temperature: "));

console.log(isShortsWeather(tem));
