function evenNumbers(max_num) {
  for (let counter = 1; counter <= max_num; counter += 1) {
    if (counter % 2 === 0) console.log(counter);
  }
}

function evenNumbers(max_num) {
  let counter = 1;
  while (counter <= max_num) {
    if (counter % 2 === 0) console.log(counter);
    counter += 1;
  }
}

evenNumbers(99);
