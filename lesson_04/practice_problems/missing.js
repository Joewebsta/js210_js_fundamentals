// function missing(arr) {
//   let missingNums = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     let currentElem = arr[i];
//     let nextElem = arr[i + 1];

//     if (!adjacentNums(currentElem, nextElem) && nextElem !== undefined) {
//       for (let i = currentElem + 1; i < nextElem; i += 1) {
//         missingNums.push(i);
//       }
//     }
//   }

//   return missingNums;
// }

// function adjacentNums(num1, num2) {
//     return num1 + 1 === num2;
// }

function missing(arr) {
  let missingNums = [];

  for (let i = arr[0]; i < arr[arr.length - 1]; i += 1) {
    if (!arr.includes(i)) {
      missingNums.push(i)
    }
  }

  return missingNums;
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []