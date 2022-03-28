let today = new Date();

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

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
  
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);
  
  return `Today's date is ${day}, ${month} ${dateSuffix(date.getDate())}.`;
}

// console.log(formattedDate(today));