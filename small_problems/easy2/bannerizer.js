// function logInBox(text) {
//   const textLength = text.length + 2;
  
//   console.log(dashedLine(textLength));
//   console.log(emptyLine(textLength));
//   console.log(textLine(text));
//   console.log(emptyLine(textLength));
//   console.log(dashedLine(textLength));
// }

// function dashedLine(length) {
//   let result = '';

//   for (let i = 1; i <= length; i += 1) {
//     result += '-';
//   }

//   return `+${result}+`;
// }

// function emptyLine(length) {
//   let result = '';

//   for (let i = 1; i <= length; i += 1) {
//     result += ' ';
//   }

//   return `|${result}|`;
// }

// function textLine(text) {
//   return `| ${text} |`;
// }

function logInBox(text) {
  const horizontalRule = `+${repeatedChar('-', text.length + 2)}+`;
  const emptyLine = `|${repeatedChar(' ', text.length + 2)}|`;
  
  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${text} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

function repeatedChar(char, times) {
  let repeated = '';

  while (repeated.length < times) {
    repeated += char;
  }

  return repeated;
}

logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+


logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+