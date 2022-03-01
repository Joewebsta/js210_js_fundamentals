function multiplesOfThreeAndFive(start, end) {
  for (let currentNum = start; currentNum <= end; currentNum++) {
    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
      console.log(`${currentNum}!`);
    } else if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      console.log(`${currentNum}`);
    }
  }
}

multiplesOfThreeAndFive(1, 100);

// // output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// // … remainder of output omitted for brevity
