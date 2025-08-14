const lastElement = (arr) =>{
    let result = arr.length;
    return arr[result-1];
}

const readlineSync = require('readline-sync');

let size = Number(readlineSync.question("Enter array size: "));
let arr=[];
console.log("Enter array element here: ");
for( let i=0 ;i<size; i++){
    let element= Number(readlineSync.question(""));
    arr.push(element);
}
console.log("The last element is: ",lastElement(arr));
