


function greetings(name, work_details) {

  name = name.join(' ');
  const title = work_details.title;
  const occupation = work_details.occupation;

  return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));


// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.