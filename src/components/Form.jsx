import { useState } from 'react';
import { useForm } from 'react-hook-form';
import arrow from '../assets/icon-arrow.svg';

import {
  getCurrentDay,
  getCurrentMonth,
  getCurrentYear,
} from '../../lib/dateHelper';

export default function Form({ setDate }) {
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
    // some of data content is string, convert those string
    // to integer befor passing to setDate function
    const dateArrStr = [data.year, data.month, data.day];
    const dateArrNum = dateArrStr.map((num) => parseInt(num));
    setDate(dateArrNum);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative border-b-[1px] pb-16 mb-16'
    >
      <section className='grid grid-cols-3 gap-4 md:gap-6 md:w-3/4'>
        <div>
          <label
            htmlFor='day'
            className={
              ['required', 'min', 'max'].includes(errors.day?.type)
                ? 'label-error'
                : 'label-default'
            }
          >
            Day
          </label>
          <input
            id='day'
            type='number'
            placeholder='DD'
            className={
              ['required', 'min', 'max'].includes(errors.day?.type)
                ? 'input-error'
                : 'input-default'
            }
            {...register('day', { required: true, min: 1, max: maxDays })}
            onChange={handleDayChange}
          />
          {errors.day?.type === 'required' && (
            <p className='error-message'>This field is required</p>
          )}
          {errors.day?.type === 'min' && (
            <p className='error-message'>Must be a valid day</p>
          )}
          {errors.day?.type === 'max' && (
            <p className='error-message'>Must be a valid day</p>
          )}
        </div>
        <div>
          <label
            htmlFor='month'
            className={
              ['required', 'min', 'max'].includes(errors.day?.type)
                ? 'label-error'
                : 'label-default'
            }
          >
            Month
          </label>
          <input
            id='month'
            type='number'
            placeholder='MM'
            className={
              ['required', 'min', 'max'].includes(errors.day?.type)
                ? 'input-error'
                : 'input-default'
            }
            {...register('month', {
              required: true,
              min: 1,
              max: 12,
            })}
            onChange={handleMonthChange}
          />
          {errors.month?.type === 'required' && (
            <p className='error-message'>This field is required</p>
          )}
          {errors.month?.type === 'min' && (
            <p className='error-message'>Must be a valid month</p>
          )}
          {errors.month?.type === 'max' && (
            <p className='error-message'>Must be a valid month</p>
          )}
        </div>
        <div>
          <label
            htmlFor='year'
            className={
              ['required', 'min', 'max'].includes(errors.day?.type)
                ? 'label-error'
                : 'label-default'
            }
          >
            Year
          </label>
          <input
            id='year'
            type='number'
            placeholder='YYYY'
            className={
              ['required', 'min', 'max'].includes(errors.day?.type)
                ? 'input-error'
                : 'input-default'
            }
            {...register('year', {
              required: true,
              min: 100,
              max: currentYear,
            })}
            onChange={handleYearChange}
          />
          {errors.year?.type === 'required' && (
            <p className='error-message'>This field is required</p>
          )}
          {errors.year?.type === 'min' && (
            <p className='error-message'>Must be a valid year</p>
          )}
          {errors.year?.type === 'max' && (
            <p className='error-message'>Must be in the past</p>
          )}
        </div>
      </section>
      <button
        type='submit'
        className='absolute bottom-0 left-[50%] translate-y-[50%] -translate-x-[50%] md:left-[80%] md:translate-x-[50%]'
      >
        <img
          src={arrow}
          alt='arrow button'
          srcSet=''
          className='btn-default'
          width={0}
          height={0}
        />
      </button>
    </form>
  );
}
