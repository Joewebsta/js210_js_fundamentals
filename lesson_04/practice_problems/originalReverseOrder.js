function originalReverseOrder(arr) {
  let reverseElems = arr.slice().reverse();

  return arr.concat(reverseElems);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(originalReverseOrder(digits));