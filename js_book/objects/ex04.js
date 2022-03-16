let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// let uppercaseObj = {};

// for (let prop in obj) {
//   if (obj.hasOwnProperty(prop)) {
//     uppercaseObj[prop.toUpperCase()] = obj[prop];
//   }
// }

const objKeys = Object.keys(obj);
const upcaseKeys = objKeys.map(key => key.toUpperCase())

console.log(upcaseKeys);
console.log(obj);