function createRow(numDigits, rowWidth) {
  let result = '';

  for (let position = 1; position <= rowWidth; position += 1) {
    if (position <= numDigits) {
      result += String(position);
    } else if (position > 9) {
      result += '**';
    } else {
      result += '*';
    }
  }
  return result;
}

function generatePattern(nStars) {
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    console.log(createRow(lineNumber, nStars)); 
  }
}


generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567