function wordCount(string) {
  const count = {};
  const words = string.split(' ');
  
  words.forEach(word => {
    if (count[word]) {
      count[word] += 1;
    } else {
      count[word] = 1;
    }
  })
  
  return count;
}


console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }