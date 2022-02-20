function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar); // This is global 

// When hoisting is performed, equivalent to:
//
// var myVar;
// 
// function someFunction() {
//   myVar = 'This is global';
// }

// someFunction();
// console.log(myVar);