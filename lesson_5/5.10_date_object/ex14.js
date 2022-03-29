function formatTime(date) {
  let hour = date.getHours();
  let min = date.getMinutes();

  return `${addZero(hour)}:${addZero(min)}`;
}

function addZero(value) {
  value = String(value);

  if (value.length === 1) {
    value = value.padStart(2, '0');
  }

  return value;
}

console.log(formatTime(new Date(2013, 2, 1, 1, 10)));