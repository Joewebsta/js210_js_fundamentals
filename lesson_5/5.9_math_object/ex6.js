function rand(min, max) {
  if (min === max) return min;
  if (min > max) [min, max] = [max, min];

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

console.log(rand(10, 2)); 