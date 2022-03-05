function substring(string, start = 0, end = string.length) {
  let newStr = "";
  
  if (end < 0 || isNaN(end)) {
    end = 0;
  } 
  
  if (start < 0 || isNaN(start)) {
    start = 0;
  } 
  
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }


  for (let index = start; index < end; index += 1) {
    if (string[index] === undefined) break;
    newStr += string[index];
  }

  return newStr;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 4, 4));    // ""
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"