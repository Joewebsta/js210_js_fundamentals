const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

/*
The first for loop iterates for array1, accesses each element and appends each element to array2.
Strings are immutable so each string in array2 is a new string that occupies a new location in memory.
Therefore array1 and array2 contain strings that share the same values, but do not reference the same strings.
*/

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

/*
The second for loop once again iterates over array1, accesses each element and then 
checks whether the element starts with a 'C'. If so, the current element is reassigned
to the uppercased version of the element's current string value.
*/

console.log(array1);
console.log(array2);

/*
Ultimately array2 will remain unchanged, despite array1 being modified because array1 and 
array2 contain separate and unique strings.

The contents of an array can be modified, but primitive values cannot.
*/