function nthElementOf(arr, index) {
  return arr[index]; 
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // undefined
nthElementOf(digits, -1);  // undefined