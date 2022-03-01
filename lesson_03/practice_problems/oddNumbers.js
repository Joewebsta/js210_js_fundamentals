// function logOddNumbers(maxNum) {
//   for (let currentNum = 1; currentNum <= maxNum; currentNum += 2) {
//     console.log(currentNum);
//   }
// }

function logOddNumbers(num) {
  for (let currentNum = 1; currentNum <= num; currentNum += 1) {
    if (currentNum % 2 === 0) continue;
    console.log(currentNum);
  }
}


logOddNumbers(19);

// // output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19