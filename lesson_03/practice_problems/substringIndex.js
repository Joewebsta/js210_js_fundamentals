function indexOf(firstString, secondString) {
  for (let index = 0; index <= firstString.length - 1; index += 1) {
    if (firstString[index] === secondString[0]) {
      if (matchingStrings(index, firstString, secondString)) {
        return index;
      } else {
        return -1;
      }
    } 
  }
}

function lastIndexOf(firstString, secondString) {
  let lastIndex;
  
  for (let index = 0; index <= firstString.length - 1; index += 1) {
    if (firstString[index] === secondString[0]) {
      if (matchingStrings(index, firstString, secondString)) {
        lastIndex = index;
      } else {
        return -1;
      }
    } 
  }

  return lastIndex;
}

function matchingStrings(charMatchIndex, str1, str2) {
  for (let index = 0; index <= str2.length - 1; index += 1) {
    let str1Char = str1[charMatchIndex + index];
    let str2Char = str2[index];
    
    if (str1Char !== str2Char) return false;
  }
  return true;
}


// console.log(indexOf('Some strings', 's'));                      // 5
// console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1