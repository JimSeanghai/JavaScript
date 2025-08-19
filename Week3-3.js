const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrCombine = [...arr1, ...arr2];
console.log(arrCombine);

const a = { x: 1, y: 2 };
const b = { y: 3, z: 4 };

const c = {...a, ...b};
console.log(c);
