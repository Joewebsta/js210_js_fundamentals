function indexOf(arr, val) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) return i;
  }

  return -1;
}


console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1