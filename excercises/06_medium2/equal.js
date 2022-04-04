const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

/*
Line 4 evaluates to false because although the person and other person constant 
variables references object literals that both have the same properties,
the two object literals are not the same object nor equal. JavaScript considers two objects
to be equal only if the two objects are the SAME object. Put another way, the 
two objects must occupy the same location in memory.

The following code will work as expected:

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // false -- expected: true

*/

