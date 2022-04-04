function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true

/*
On line 5, the if statement conditional expression uses the loose equality 
operator to check whether the value of the element variable is equal to false. 

Unlike the strict equality operator, the loose equality operator will sometimes implictiely coerces one or both operands
prior to checking for equality. 

When the value of element is `0`, `==` will implicitely coerce false to an integer, in this
case 0; As as results, the conditional expression will be equivalent to 
0 == 0 and will return true which not what we want.;

Instead, the strcit equality operator should be used. This operator does not perform implicit coercion
and return true when two operands have the same value and date type. False otherwise.

*/