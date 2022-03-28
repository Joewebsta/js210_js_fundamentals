// function penultimate(string) {
//   const chars = string.split(' ');
//   return chars[chars.length - 2];
// }

function penultimate(string) {
  const chars = string.split(' ');
  return chars.splice(-2)[0];
}

console.log(penultimate('last word'));                     // expected: "last"
console.log(penultimate('Launch School is great!'));       // expected: "is"

/*
This code will output undefined.
This occurs because line 2 attempts to access a non-index property (key) of
the array returned by string.split(' ') which doesn't exist. Thus line 2 evaluates to 
undefined and is then returned by the the penultimate function.

JAVASCRIPT ARRAYS ARE OBJECTS

We can fix this code by assigning the array returned by string.split to the variable
chars and then return a reference to the array element that is two less then the length of the 
chars array.
*/