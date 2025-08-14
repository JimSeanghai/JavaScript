const sumArray = function(arr){
    let result=0;
    for(let i=0; i<arr.length; i++){
        result+= arr[i];
    }
    return result;
}

const readlineSync = require('readline-sync');

let size = Number(readlineSync.question("Enter array size: "));
let arr=[];
console.log("Enter array element here: ");
for( let i=0 ;i<size; i++){
    let element= Number(readlineSync.question(""));
    arr.push(element);
}
console.log("The sum of all the numbers in the array are: ",sumArray(arr));
