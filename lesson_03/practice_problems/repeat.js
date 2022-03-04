function repeat(string, times) {
  if (times < 0 || !Number.isInteger(times)) return undefined;
  
  let result = "";
  for (let round = 1; round <= times; round += 1) {
    result += string;
  }
   
  return result;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined