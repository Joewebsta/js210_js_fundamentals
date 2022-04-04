const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
// const array = ['Apples', 'Peaches', 'Grapes', 3.4: 'Oranges'];

console.log(array.length); 
// 3 - Length returns the total number of elements in an array. (Elements are
// values that have been assigned to index properties.) 
// Values assigned to non-index properties are not counted.
console.log(Object.keys(array).length);
// 4 - Object.keys returns an array that contains all index/keys of an array.



array[-2] = 'Watermelon';
// const array = ['Apples', 'Peaches', 'Grapes', 3.4: 'Oranges', -2: 'Watermelon'];
console.log(array.length);
// 3
console.log(Object.keys(array).length);
// 5