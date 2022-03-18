function copyProperties(obj1, obj2) {
  let numPropCopies = 0;

  for (let prop in obj1) {
    obj2[prop] = obj1[prop];
    numPropCopies += 1;
  }

  return numPropCopies;

  // Object.assign(obj2, obj1);
  // return Object.keys(obj2).length;
}


let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }