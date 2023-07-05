import moment from 'moment/moment';

export function timeNow() {
  return new Date();
}

export function getCurrentYear() {
  return timeNow().getFullYear();
}

export function getCurrentMonth() {
  return timeNow().getMonth() + 1;
}

export function getCurrentDay() {
  return timeNow().getDate();
}

export function calculateAge(birthDate) {
  let currentDate = moment();
  let pastDate = moment(birthDate, 'YYYY-MM-DD');

  let years = currentDate.diff(pastDate, 'years');
  pastDate.add(years, 'years');

  let months = currentDate.diff(pastDate, 'months');
  pastDate.add(months, 'months');

  let days = currentDate.diff(pastDate, 'days');

  // Return the result as an object
  return { years, months, days };
}

// export function calculateAge(birthDate) {
//   const start = new Date(birthDate);
//   const end = timeNow();

//   // Calculate the difference in milliseconds
//   const diffInMs = end - start;

//   // Calculate the number of milliseconds in a day
//   const msInDay = 24 * 60 * 60 * 1000;

//   // Calculate the difference in days
//   const diffInDays = Math.floor(diffInMs / msInDay);

//   // Calculate the years and remaining days
//   const years = Math.floor(diffInDays / 365);
//   const remainingDays = diffInDays % 365;

//   // Calculate the months and remaining days
//   const months = Math.floor(remainingDays / 30);
//   const days = remainingDays % 30;

//   // Return the result as an object
//   return { years, months, days };
// }

// // Example usage
// const birthDate = new Date('1981-08-06');
// const age = calculateAge(birthDate);

// https://chat.openai.com/share/d9d9824d-4be9-4708-9071-283acd8a513a
