let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dayAbrev = daysOfWeek[today.getDay()];
let dayOfMonth = today.getDate();

console.log(`Today's date is ${dayAbrev}, the ${dayOfMonth}st.`);

