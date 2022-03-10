function reverseOrder(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reversed.push(arr[i]);
  }
  return reversed;
}

let phrase = ["Joe", "is", "da", "best"];
console.log(reverseOrder(phrase));