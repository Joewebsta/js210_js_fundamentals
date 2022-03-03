function isPrime(num) {
  if (num === 0 || num === 1) return false;
  
  for (let currentNum = 2; currentNum < num; currentNum += 1) {
    if (num % currentNum === 0) return false;
  }
  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }
  for (let currentNum = 2; currentNum <= expectedSum; currentNum += 1) {
    let remainder = expectedSum - currentNum;

    if (currentNum > remainder) break;

    if (isPrime(currentNum) && isPrime(remainder))  {
      console.log(currentNum, remainder)
    }
  }

  // increment from 2 to the expectedSum
  // check if the currentNum isPrime
  // if yes, subtract currentNumber from expectedNum
    //  determine if this number is also prime
    // if yes, log both numbers
}


checkGoldbach(3);
// logs: null

// checkGoldbach(4);
// logs: 2 2

// checkGoldbach(12);
// logs: 5 7

// checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53