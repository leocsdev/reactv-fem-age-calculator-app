import { useState } from 'react';

export default function Form({ getDate }) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = `${year}-${month}-${day}`;

    getDate(date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col items-start pb-2'>
        <label htmlFor='day'>Day</label>
        <input
          type='number'
          name='day'
          id='day'
          placeholder='DD'
          className='border'
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
      </div>
      <div className='flex flex-col items-start pb-2'>
        <label htmlFor='month'>Month</label>
        <input
          type='number'
          name='month'
          id='month'
          placeholder='MM'
          className='border'
          onChange={(e) => setMonth(e.target.value)}
          value={month}
        />
      </div>
      <div className='flex flex-col items-start pb-2'>
        <label htmlFor='year'>Year</label>
        <input
          type='number'
          name='year'
          id='year'
          placeholder='YYYY'
          className='border'
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
