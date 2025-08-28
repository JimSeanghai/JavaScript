let students = [
{ name: "Alice", score: 85 }, 
{ name: "Bob", score: 92 }, 
{ name: "Charlie", score: 78 } ];

let newArray = students.map( students =>{
    if( students.score >= 80){
        return students.name + ":Passed";
    }else{
        return students.name + ":Failed";
    }
})

console.log(newArray);
