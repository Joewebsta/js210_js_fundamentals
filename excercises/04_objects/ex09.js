// function timeOfDay(totMin){
//   let formattedTime;

//   if (totMin >= 0) {
//     formattedTime = timeOfDayPos(totMin);
//   } else {
//     formattedTime = timeOfDayNeg(totMin);
//   }

//   return formattedTime;
// }

// function timeOfDayPos(totMin) {
//   let hours = '00';
//   let min = '00';

//   if (totMin > 1440) {
//     while (totMin > 1440) {
//       totMin = totMin - 1440;
//     }
//   }

//   if (totMin !== 0 && totMin < 60) {
//     min = totMin;
//   }

//   if (totMin > 60) {
//     hours = Math.floor(totMin / 60);
//     min = Math.floor(((totMin / 60) - hours) * 60);
//   }

//   return `${addZero(hours)}:${addZero(min)}`;
// }

// function timeOfDayNeg(totMin) {
//   let hours = 23;
//   let min = '00';

//   if (totMin < -1440) {
//     while (totMin < -1440) {
//       totMin = totMin + 1440;
//     }
//   }

//   if (totMin > -60) {
//     min = 60 + totMin;
//   }

//   return `${addZero(hours)}:${addZero(min)}`;
// }

// function addZero(value) {
//   value = String(value);

//   return value.length === 1 ? value.padStart(2, '0') : value;
// }

// // console.log(timeOfDay(0));          // "00:00"
// // console.log(timeOfDay(35));         // "00:35"
// // console.log(timeOfDay(800));        // "13:20"
// // console.log(timeOfDay(3000));       // "02:00"
// // console.log(timeOfDay(3005));       // "02:00"
// // console.log(timeOfDay(3050));       // "02:00"
// console.log(timeOfDay(-3));          // "23:57"
// console.log(timeOfDay(-60));          // "23:00"
// console.log(timeOfDay(-1437));       // "00:03"
// // console.log(timeOfDay(-4231));       // "01:29"



const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(3005));       // "02:00"
console.log(timeOfDay(3050));       // "02:00"