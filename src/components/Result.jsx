import { calculateAge } from '../../lib/dateHelper';

export default function Result({ date }) {
  // if date is not established, default value is undefined
  const age = calculateAge(date);

  return (
    <div>
      <p>{date === undefined ? '--' : age.years} years</p>
      <p>{date === undefined ? '--' : age.months} months</p>
      <p>{date === undefined ? '--' : age.days} days</p>
    </div>
  );
}
