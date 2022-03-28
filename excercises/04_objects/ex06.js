const myArray = [5, 5];
myArray[-1] = 5; // [5, 5, '-1': 5];
myArray[-2] = 5; // [5, 5, '-1': 5, '-2': 5];

function average(array) {
  let sum = 0;
  let trueLength = Object.keys(array).length

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / trueLength;
}

console.log(average(myArray));

/* The average function will return 10 */

/*
Lines 2 and 3 do not reference and reassign the last and second to last indexes to 5 
(i.e. indexes 0 and 1). Instead, lines 2 and 3 create the non-index properties '-1'
and '-2' and respectively assigns each of them to 5. 

We now have four array properties (2 index properties and 2 non-index properties) that have a value
of 5. 

The for loop iterates over each property, accesses it's value and adds it to the sum variable.
At the end of iteration, the sum variable references a value of 20.

Line 12 then divides the value of sum (20) by the array's length (2) which evalutes to 10. Array's
length is 2, because only elements (index properties) are included in an array's length.

*/