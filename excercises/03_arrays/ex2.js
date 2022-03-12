const myArray = [1, 2, 3, 4];

// Solution 1
// const myOtherArray = myArray.slice();

// Solution 2
const myOtherArray = [];
myArray.forEach(elem => myOtherArray.push(elem));

myArray.pop();
console.log(myArray);
console.log(myOtherArray);