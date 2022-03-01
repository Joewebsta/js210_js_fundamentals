function fizzBuzz() {
  for (let num = 1; num <= 100; num += 1) {
    result = '';
    if (num % 3 === 0) result += 'Fizz'  
    if (num % 5 === 0) result += 'Buzz'  

    console.log(result || num);
  }
}

fizzBuzz();