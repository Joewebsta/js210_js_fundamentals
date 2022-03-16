let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

// function copyObj(objToCopy, keysToCopy) {
//   const newObj = {};
//   const objToCopyKeys = Object.keys(objToCopy);

//   objToCopyKeys.forEach(key => {
//     if (!keysToCopy) {
//       newObj[key] = objToCopy[key];
//     } else if (keysToCopy.includes(key)) {
//       newObj[key] = objToCopy[key];
//     }
//   });

//   return newObj;
// }

function copyObj(objToCopy, keysToCopy) {
  const newObj = {};
  
  for (let prop in objToCopy) {
    if (!objToCopy.hasOwnProperty(prop)) continue;

    if (!keysToCopy) {
      newObj[prop] = objToCopy[prop];
    } else if (keysToCopy.includes(prop)) {
      newObj[prop] = objToCopy[prop];
    }

    console.log(prop);
  }

  return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }