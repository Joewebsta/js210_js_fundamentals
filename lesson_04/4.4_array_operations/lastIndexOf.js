function lastIndexOf(arr, val) {
  let lastIndex = -1;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) lastIndex = i;
  }

  return lastIndex;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1