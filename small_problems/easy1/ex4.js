let rlSync = require('readline-sync');

let billTotal = rlSync.question("What is the bill? ");
let tipPercent = rlSync.question("What is the tip percentage? ");

billTotal = parseFloat(billTotal, 10);
tipPercent = parseFloat(tipPercent, 10) / 100;

let tip = billTotal * tipPercent;
let finalTotal = billTotal + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${finalTotal.toFixed(2)}`);


// The total is $230.00

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00