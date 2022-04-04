function invoiceTotal(...args) {
  let sum = 0;

  for (let index = 0; index < args.length; index += 1) {
    sum += args[index]
  }
  
  return sum;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?


