function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

function concat(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    push(newArr, arr1[i]);
  } 

  for (let i = 0; i < arr2.length; i += 1) {
    push(newArr, arr2[i]);
  } 

  return newArr;
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]