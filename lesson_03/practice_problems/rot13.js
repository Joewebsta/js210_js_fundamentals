function rot13(string) {
  const ROTATIONS = 13;
  let rotatedString = "";

  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];
    
    if (currentChar.match(/[a-z]/i)) {
      rotatedString += rotate(currentChar, ROTATIONS);
    } else {
      rotatedString += currentChar;
    }
  }
  return rotatedString
}

function rotate(char, ROTATIONS) {
  let asciiNumeric = char.charCodeAt()

  if (char.match(/[a-m]/i)) asciiNumeric += ROTATIONS;
  if (char.match(/[n-z]/i)) asciiNumeric -= ROTATIONS;
    
  return String.fromCharCode(asciiNumeric);
} 

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
console.log(rot13('Teachers open the door, but you must enter by yourself.') === "Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.");