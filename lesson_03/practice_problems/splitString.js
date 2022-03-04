function splitString(str, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }
  
  let result = "";
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === delimiter) {
      console.log(result);
      result = "";
      continue;
    }
    
    if (delimiter === '') {
      console.log(str[index]);
      continue;
    } 
    
    result += str[index];
  }
  
  if (result) {
    console.log(result);
  }
}

// …
  // if delimiter === undefined log ERROR: No delimiter and return

  // iterate over each char in string
  // if delimiter is an empty string
    // log each individual character 

  // add each char to result
  // if char is equal to delimiter
  //    log result
  //    set result to ""
  //    continue to next char

console.log(splitString('abc,123,hello world', ','));
// logs:
// abc
// 123
// hello world

// console.log(splitString('hello'));
// logs:
// ERROR: No delimiter

// console.log(splitString('hello', ''));
// logs:
// h
// e
// l
// l
// o

// console.log(splitString('hello', ';'));
// logs:
// hello

// console.log(splitString(';hello;', ';'));
// logs:
//  (this is a blank line)
// hello