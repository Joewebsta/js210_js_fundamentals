function oddElementsOf(arr) {
  let oddElements = [];

  for (let i = 1; i < arr.length; i += 2) {
    oddElements.push(arr[i])
  }

  return oddElements;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]