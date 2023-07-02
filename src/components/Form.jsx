import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  getCurrentDay,
  getCurrentMonth,
  getCurrentYear,
} from '../../lib/dateHelper';

export default function Form({ getDate }) {
  const [maxDays, setMaxDays] = useState(31);

  const currentYear = getCurrentYear();
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const monthsWithLess31Days = [2, 4, 6, 9, 11];

  const onSubmit = (data) => {
    const date = `${data.year}-${data.month}-${data.day}`;

    getDate(date);
  };

  // check maxDays and current date values
  const checkDateParams = (year, month, day) => {
    // Set the current day, month, year if the input is set to the future date
    if (year === currentYear) {
      if (month >= currentMonth) {
        setValue('month', currentMonth);

        if (day >= currentDay) {
          setValue('day', currentDay);
        }
      }
    }

    // Return the correct maxDays
    const leapYear = year % 4 === 0 ? true : false;
    const isLess31Days = monthsWithLess31Days.includes(month);

    if (month === 2 && isLess31Days && leapYear) {
      return setMaxDays(29);
    }
    if (month === 2 && isLess31Days) {
      return setMaxDays(28);
    }
    if (isLess31Days) {
      return setMaxDays(30);
    }

    return setMaxDays(31);
  };

  const handleDayChange = (e) => {
    const day = parseInt(e.target.value);
    setValue('day', day);

    const month = parseInt(getValues('month'));
    const year = parseInt(getValues('year'));

    checkDateParams(year, month, day);
  };

  const handleMonthChange = (e) => {
    const month = parseInt(e.target.value);
    setValue('month', month);

    const day = parseInt(getValues('day'));
    const year = parseInt(getValues('year'));

    checkDateParams(year, month, day);
  };

  const handleYearChange = (e) => {
    const year = parseInt(e.target.value);
    setValue('year', year);

    const day = parseInt(getValues('day'));
    const month = parseInt(getValues('month'));

    checkDateParams(year, month, day);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col items-start pb-2'>
        <label htmlFor='day'>Day</label>
        <input
          id='day'
          type='number'
          placeholder='DD'
          className='border'
          {...register('day', { required: true, min: 1, max: maxDays })}
          onChange={handleDayChange}
        />
        {errors.day?.type === 'required' && <p>This field is required</p>}
        {errors.day?.type === 'min' && <p>Must be a valid day</p>}
        {errors.day?.type === 'max' && <p>Must be a valid day</p>}
      </div>
      <div className='flex flex-col items-start pb-2'>
        <label htmlFor='month'>Month</label>
        <input
          id='month'
          type='number'
          placeholder='MM'
          className='border'
          {...register('month', {
            required: true,
            min: 1,
            max: 12,
          })}
          onChange={handleMonthChange}
        />
        {errors.month?.type === 'required' && <p>This field is required</p>}
        {errors.month?.type === 'min' && <p>Must be a valid month</p>}
        {errors.month?.type === 'max' && <p>Must be a valid month</p>}
      </div>
      <div className='flex flex-col items-start pb-2'>
        <label htmlFor='year'>Year</label>
        <input
          id='year'
          type='number'
          placeholder='YYYY'
          className='border'
          {...register('year', {
            required: true,
            min: 100,
            max: currentYear,
          })}
          onChange={handleYearChange}
        />
        {errors.year?.type === 'required' && <p>This field is required</p>}
        {errors.year?.type === 'min' && <p>Must be a valid year</p>}
        {errors.year?.type === 'max' && <p>Must be in the past</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
