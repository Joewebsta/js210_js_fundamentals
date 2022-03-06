function oddNumbers(max_num) {
  for (let counter = 1; counter <= max_num; counter += 2) {
    console.log(counter);
  }
}

function oddNumbers(max_num) {
  let counter = 1;
  while (counter <= max_num) {
    console.log(counter);
    counter += 2;
  }
}

function oddNumbers(max_num) {
  let counter = 1;
  while (true) {
    if (counter > max_num) break;
    console.log(counter);
    counter += 2;
  }
}

oddNumbers(99);
