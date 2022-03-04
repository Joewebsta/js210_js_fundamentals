function convertToLowercase(char) {
  let asciiNumeric = char.charCodeAt();
  asciiNumeric += 32;
  return lowerCaseChar = String.fromCharCode(asciiNumeric);
}

function isCapital(char) {
  return char >= 'A' && char <= 'Z';
}

function toLowerCase(string) {
  let result = "";

  for (let index = 0; index <= string.length - 1; index += 1) {
    if (isCapital(string[index])) {
      result += convertToLowercase(string[index]);
    } else {
      result += string[index];
    }
  }

  return result;
}


console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"