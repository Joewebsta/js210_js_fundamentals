const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

let a = 'a'
myObject[1];
// myObject[a]; // incorrect
// When using bracket notation, the property name must be a string.
myObject['a']; // correct
myObject.a;