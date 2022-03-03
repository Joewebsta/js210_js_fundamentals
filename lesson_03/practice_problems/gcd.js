function gcd(num1, num2) {
  let largestNum = (num1 > num2 ? num1 : num2);
  let largestDivisor = 1;

  for (let currentNum = largestDivisor; currentNum <= largestNum; currentNum += 1) {
    if (num1 % currentNum === 0 && num2 % currentNum === 0) {
      largestDivisor = currentNum;
    }
  }

  return largestDivisor;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
console.log(gcd(10, 10));    // 1
console.log(gcd(10, 15));  // 5