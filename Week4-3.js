let prices=[10, 20, 30, 40];
let numbers=prices.map(prices=>prices*0.8);
numbers.forEach(num => {
    if( (num - 8) != 0){
        console.log("Discounted price : $" +(num-8) );
    }
});
