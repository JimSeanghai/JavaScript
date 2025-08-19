const readlineSync = require('readline-sync');
const size = Number(readlineSync.question("Enter size of array: "));
let arr =[];
for(let i=0 ; i<size;i++){
    let element = Number(readlineSync.question(" "));
    arr.push(element);
}

const sumArray = (arr, size) =>{
    let result =0;
    for(let i =0; i<size ; i++){
        result += arr[i];
    }
    return result;
}

console.log("Sum all element in array: ", sumArray(arr, size));
