const arr=[1,2,3];

const arrNew = [0,1,2,3,4,5];

const [first, second, ...rest] = arrNew;

console.log(arrNew);
console.log(`first=${first}, second=${second}` , "rest=",rest);
