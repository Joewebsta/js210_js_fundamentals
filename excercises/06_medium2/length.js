const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); //['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); //['JavaScript', 'Ruby', 'Python', 1 empty item]
console.log(languages.length); //4

languages.length = 1; 
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', 2 empty items]
console.log(languages.length); 3

languages.length = 1; // ['JavaScript']
languages[2] = 'Python'; 
console.log(languages); // ['JavaScript', 1 empty item, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); 3

/*
Line 5 - Assigning an array's length property to a new larger value will expand the array
to the new size.
This larger length will create new elements that are left unset.

Line 9 - Assigning the length property to a smaller size will truncate the array.
Any elements beyond the new final element will be removed.

Line 20 - Referencing an unset element will return undefined.

Assigning the length property to a value greater than the total number
of current elements in array will increase the array to the new size. 

*/