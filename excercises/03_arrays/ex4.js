function concat(...args) {
  let newArr = [];

  args.forEach(subElem => {
    if (Array.isArray(subElem)) {
      subElem.forEach(elem => newArr.push(elem))
    } else {
      newArr.push(subElem);
    }
  });

  console.log(newArr);
}


concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]