let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dayAbrev = daysOfWeek[today.getDay()];
let dayOfMonth = today.getDate();


function dateSuffix(date) {
  const lastNum = Number(String(date).slice(-1));
  
  let suffix = 'th';
  if (lastNum === 1) {
    suffix = 'st';
  } else if (lastNum === 2) {
    suffix = 'nd';
  } else if (lastNum === 3) {
    suffix = 'rd';
  }

  return `${date}${suffix}`;
}

console.log(`Today's date is ${dayAbrev}, the ${today.getMonth()} ${dateSuffix(dayOfMonth)}.`);

/*
1st 21st 31st
2nd 22nd
3rd 23rd
4th 5th 6th 7th 8th 9th 10th 11th 12th 13th 14th 15th 16th 17th 18th 19th 20th 24th 25th 26th 27th 28th 29th 30th

*/