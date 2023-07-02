export default function calculateAge(birthDate) {
  const start = new Date(birthDate);
  const end = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = end - start;

  // Calculate the number of milliseconds in a day
  const msInDay = 24 * 60 * 60 * 1000;

  // Calculate the difference in days
  const diffInDays = Math.floor(diffInMs / msInDay);

  // Calculate the years and remaining days
  const years = Math.floor(diffInDays / 365);
  const remainingDays = diffInDays % 365;

  // Calculate the months and remaining days
  const months = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;

  // Return the result as an object
  return { years, months, days };
}

// // Example usage
// const birthDate = new Date('1981-08-06');
// const age = calculateAge(birthDate);

// https://chat.openai.com/share/d9d9824d-4be9-4708-9071-283acd8a513a
