let rlsync = require('readline-sync');

function compute(intMax, operationLetter) {
  let result = 1;
  for (let num = 2; num <= intMax; num += 1) {
    if (operationLetter === 's') {
      result += num;
    } else {
      result *= num;
    }
  }
  return result;
}

let intMax = parseInt(rlsync.question('Please enter an integer greater than 0: ', 10));
let operationLetter = rlsync.question('Enter "s" to compute the sum, or "p" to compute the product: ');
let operationType = '';
let result = '';

if (operationLetter === 's') {
  operationType = 'sum';
  result = compute(intMax, operationLetter);
} else if (operationLetter = 'p') {
  operationType = 'product';
  result = compute(intMax, operationLetter);
}

console.log(`The ${operationType} of the integers between 1 and ${intMax} is ${result}.`)
