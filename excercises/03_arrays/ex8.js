function slice(array, begin, end) {
  const newArr = [];

  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;

  for (let i = begin; i < end; i += 1) {
    newArr.push(array[i]);
  }

  return newArr;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...args) {
  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  let removedElems = [];

  if (deleteCount > 0) {
    removedElems = deleteElems(array, start, deleteCount);
  }

  if (args.length !== 0) {
    addElems(array, start, args);
  }

  console.log(removedElems);
  console.log(array);

  return removedElems;
}

function addElems(array, start, args) {
  const newArrLength = array.length - 1 + args.length;

  for (let i = newArrLength; i >= start; i-= 1) {
    array[i] = array[i - 1];
  }

  for (let i = 0; i < args.length; i += 1) {
    array[start + i] = args[i];
  }
}

function deleteElems(array, start, deleteCount) {
  const removedElems = [];

  for (let i = start; i < array.length; i += 1) {
    if (i < start + deleteCount) removedElems.push(array[i]);
    
    array[i] = array[i + deleteCount];
  }

  array.length = array.length - deleteCount;

  return removedElems;
}

// console.log(splice([1, 2, 3, 4, 5], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3,4,5], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []



// const arr2 = [1, 2, 3]; 
// splice(arr2, 1, 1, 'two');             // [2]
// arr2;                                  // [1, "two", 3]

// const arr3 = [1, 2, 3];
// splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
// arr3;                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// splice(arr4, 1, 0);                    // []
// splice(arr4, 1, 0, 'a');               // []
// arr4;                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// splice(arr5, 0, 0, 'a');               // []
// arr5;                                  // ["a", 1, 2, 3]