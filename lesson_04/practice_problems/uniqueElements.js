function uniqueElements(arr) {
  let uniqueElems = [];

  arr.forEach(elem => {
    if (!uniqueElems.includes(elem)) {
      uniqueElems.push(elem) 
    }
  });

  return uniqueElems;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]