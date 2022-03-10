function arrayToString(arr) {
  let str = '';

  for (let i = 0; i < arr.length; i += 1) {
    str += String(arr[i]);
  }

  return str;
}

let arr = [1, 'a', 4];
console.log(arrayToString(arr));