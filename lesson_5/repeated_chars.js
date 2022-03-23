function repeatedCharacters(string) {
  const chars = string.split('');
  const char_counts = count(chars)
  
  const char_keys = Object.keys(char_counts);
  char_keys.forEach(char => {
    if (char_counts[char] < 2) {
      delete(char_counts[char])
    }
  });
  
  return char_counts;
}

function count(chars) {
  return chars.reduce((count, char) => {
    char = char.toLowerCase();

    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }

    return count;
  }, {});
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }