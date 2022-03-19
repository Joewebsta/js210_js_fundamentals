const person = {
  fName() {
    return 'Joe';
  },
  lName() {
    return 'Webster';
  },
  firstName: 'Victor',
  lastName: 'Reyes',
};

// console.log(`${person.firstName} ${person.lastName}`);
console.log(`${person.fName()} ${person.lName()}`);

