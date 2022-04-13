function copyProperties(source, destination) {
  
  for (let prop in source) {
    destination[prop] = source[prop];
  }

  return Object.keys(source).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));// 2
console.log(hal);                       // { model: 9000, enabled: true }
console.log(sal);                       // { model: 9000, enabled: true }