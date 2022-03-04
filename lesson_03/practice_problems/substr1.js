function substr(string, start, length) {
  let result = "";
  if (length <= 0) return result;

  
  if (start < 0) {
    start = string.length - Math.abs(start);
  }

  for (let index = start; index < string.length; index += 1) {
    result += string[index];
    if (result.length === length) break;
  }

  return result;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
console.log(substr('hello world', 2, 5));      // ""