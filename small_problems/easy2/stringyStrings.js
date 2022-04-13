function stringy(length) {
  let result = '';

  while (result.length < length) {
    if (result.length % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }

  // console.log(result);
  return result;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"