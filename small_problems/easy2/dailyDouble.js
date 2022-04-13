// function crunch(string) {
//   let result = '';

//   for (let i = 0; i < string.length; i += 1) {
//     let char = string[i];
    
//     if (result.endsWith(char)) continue;

//     result += char;
//   }
  
//   return result;
// }


function crunch(string) {
  let crunchedString = string.split('').reduce((result, char) => {
    if (!result.endsWith(char)) result += char;

    return result;
  }, '');

  return crunchedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""