function objectHasProperty(obj, propName) {
  // for (let prop in obj) {
  //   if (prop === propName) return true;
  // }
  
  // return false;
  // return !!obj[propName];
  
  const keys = Object.keys(obj);
  return keys.indexOf(propName) !== -1 
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true