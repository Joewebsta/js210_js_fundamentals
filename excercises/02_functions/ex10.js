logValue(); // Hello, world!

function logValue() {
  console.log('Hello, world!');
}


// After hoisting, equivalent to:

// function logValue() {
//   console.log('Hello, world!');
// }

// logValue();

//  Further exploration --------------------------

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue); // string

// After hoisting, equivalent to:

// function logValue() {
//   console.log('Hello, world!');
// }

// logValue = 'foo';

// console.log(typeof logValue); 


