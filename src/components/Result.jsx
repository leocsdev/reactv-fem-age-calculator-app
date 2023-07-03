import { calculateAge } from '../../lib/dateHelper';

export default function Result({ date }) {
  // if date is not established, default value is undefined
  const age = calculateAge(date);

  return (
    <div>
      <p className='font-extrabold italic text-[52px] leading-none'>
        <span className=' text-myPurple'>
          {date === undefined ? '--' : age.years}
        </span>{' '}
        years
      </p>
      <p className='font-extrabold italic text-[52px] leading-none'>
        <span className=' text-myPurple'>
          {date === undefined ? '--' : age.months}
        </span>{' '}
        months
      </p>
      <p className='font-extrabold italic text-[52px] leading-none'>
        <span className=' text-myPurple'>
          {date === undefined ? '--' : age.days}
        </span>{' '}
        days
      </p>
    </div>
  );
}
