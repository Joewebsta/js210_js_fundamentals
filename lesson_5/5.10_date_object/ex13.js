let today = new Date();
let nextWeek = new Date(today.getTime());
nextWeek.setDate(nextWeek.getDate() + 7);

console.log(today.toDateString());
console.log(nextWeek.toDateString());

console.log(today.toDateString() === nextWeek.toDateString());