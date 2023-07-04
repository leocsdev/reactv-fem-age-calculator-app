import { calculateAge } from '../../lib/dateHelper';

export default function Result({ date }) {
  // if date is not established, default value is undefined
  const age = calculateAge(date);

  return (
    <ul>
      <li className='result-item'>
        <span className=' text-myPurple'>
          {date === undefined ? '--' : age.years}
        </span>{' '}
        years
      </li>
      <li className='result-item'>
        <span className=' text-myPurple'>
          {date === undefined ? '--' : age.months}
        </span>{' '}
        months
      </li>
      <li className='result-item'>
        <span className=' text-myPurple'>
          {date === undefined ? '--' : age.days}
        </span>{' '}
        days
      </li>
    </ul>
  );
}
