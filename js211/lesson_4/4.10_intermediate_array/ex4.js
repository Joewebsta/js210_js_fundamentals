function matrixSums(arr) {
  return [...arr].map(subArr => sum(subArr)); 
}

function sum(arr) {
  return arr.reduce((sum, elem) => {
    return sum + elem;
  }, 0);
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));
