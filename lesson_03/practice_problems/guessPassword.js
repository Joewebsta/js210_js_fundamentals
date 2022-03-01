let rlSync = require('readline-sync');


function guessPassword() {
  const PASSWORD = "abc";
  let guessCount = 0;

  while (true) {
    let guess = rlSync.question("What is the password: ");
    
    if (guess === PASSWORD) {
      console.log('You have successfully logged in.');
      break;
    }

    guessCount += 1;

    if (guessCount === 3) {
      console.log("You have been denied access.");
      break;
    }
  }
}

guessPassword();