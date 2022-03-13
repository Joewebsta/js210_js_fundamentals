// let array = [1, 2, 3];
// console.log(shift(array));                // 1
// console.log(array);
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]

// function shift(arr) {
//   if (arr.length == 0) return undefined;

//   let firstElem = arr[0];

//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i + 1];
//   }

//   arr.length -= 1;
//   return firstElem;
// }

function shift(arr) {
  return arr.splice(0, 1).pop();
}

// function unshift(arr, ...args) {
//   let numNewElems = args.length;

//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     arr[i + numNewElems] = arr[i];
//   }
  
//   for (let i = args.length - 1; i >= 0; i -= 1) {
//     arr[i] = args[i];
//   }

//   return arr.length;
// }

function unshift(arr, ...args) {
  args.slice().reverse().forEach(arg => {
    arr.splice(0, 0, arg);
  });

  return arr.length;
}