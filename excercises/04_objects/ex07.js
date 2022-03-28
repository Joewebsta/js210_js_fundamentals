function calculateBonus(...args) {
  return args[1] ? args[0] / 2 : 0;
}

/*
All functions have access to rest parameters. Rest parameters create an array,
that contains all of the arguments passed to a method invocation.

*/

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000