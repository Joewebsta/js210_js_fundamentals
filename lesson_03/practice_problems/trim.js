// function trim(str) {
//   let result = "";
//   let encounteredLetter = false;

//   for (let index = 0; index <= str.length - 1; index += 1) {
//     if (str[index] === " " && !encounteredLetter) continue;
    
//     if (str[index] === " " && encounteredLetter) {
//       if (remainingLetters(str, (index + 1))){
//         result += str[index];  
//       } else {
//         break;
//       }
//     } else {
//       encounteredLetter = true;
//       result += str[index];
//     }
//   }

//   return result;
// }

// function remainingLetters(str, startIndex) {
//   for (let index = startIndex; index <= str.length - 1; index += 1) {
//     if (str[index] !== " ") return true;
//   }
//   return false;
// }


function trim(str) {
  let trimmed = trimLeft(str);
  return trimRight(trimmed);
}

function trimLeft(str) {
  let result = "";
  let copyMode = false;
  
  for (let index = 0; index <= str.length - 1; index += 1) {
    let currentChar = str[index];

    if (currentChar !== " ") copyMode = true;
    if (copyMode) result += currentChar;
  }
  return result;
}

function trimRight(str) {
  let result = "";
  copyMode = false;

  for (let index = str.length - 1; index >= 0; index -= 1) {
    let currentChar = str[index];

    if (currentChar !== " ") copyMode = true;
    if (copyMode) result = str[index] + result;
  }
  return result;
}

// console.log(trim('  abc  c'));
// console.log(trim('  abc  '));
// console.log(trim('abc   '));
// console.log(trim(' ab c'));
// console.log(trim(' a b  c'));
// console.log(trim(' a b  c '));
// console.log(trim('      '));
// console.log(trim(''));

console.log(trim('  abc  c') === "abc  c");  // "ab  c"
console.log(trim('  abc  ') === "abc");  // "abc"
console.log(trim('abc   ') === "abc");   // "abc"
console.log(trim(' ab c') === "ab c");    // "ab c"
console.log(trim(' a b  c') === "a b  c");  // "a b  c"
console.log(trim(' a b  c ') === "a b  c");  // "a b  c"
console.log(trim('      ') === "");   // ""
console.log(trim('') === "");         // ""