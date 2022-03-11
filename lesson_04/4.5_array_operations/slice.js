// push
// pop
// unshift
// shift
// indexOf
// lastIndexOf

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

function slice(arr, startIdx, endIdx) {
  let newArr = [];

  for (let i = startIdx; i < endIdx; i += 1) {
    push(newArr, arr[i]);
  }

  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]