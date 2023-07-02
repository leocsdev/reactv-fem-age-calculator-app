import { useForm } from 'react-hook-form';
import { getDay, getMonth, getYear } from '../../lib/dateHelper';

export default function Form({ getDate }) {
  const currentYear = getYear();
  const currentMonth = getMonth();
  const currentDay = getDay();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const date = `${data.year}-${data.month}-${data.day}`;
    getDate(date);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col items-start pb-2'>
        <label htmlFor='day'>Day</label>
        <input
          type='number'
          placeholder='DD'
          className='border'
          {...register('day', { required: true, min: 1, max: 31 })}
        />
        {errors.day?.type === 'required' && <p>This field is required</p>}
        {errors.day?.type === 'min' && <p>Must be a valid day</p>}
        {errors.day?.type === 'max' && <p>Must be a valid day</p>}
      </div>
      <div className='flex flex-col items-start pb-2'>
        <label htmlFor='month'>Month</label>
        <input
          type='number'
          placeholder='MM'
          className='border'
          {...register('month', { required: true, min: 1, max: 12 })}
        />
        {errors.month?.type === 'required' && <p>This field is required</p>}
        {errors.month?.type === 'min' && <p>Must be a valid month</p>}
      </div>
      <div className='flex flex-col items-start pb-2'>
        <label htmlFor='year'>Year</label>
        <input
          type='number'
          placeholder='YYYY'
          className='border'
          {...register('year', {
            required: true,
            min: 100,
            max: currentYear,
          })}
        />
        {errors.year?.type === 'required' && <p>This field is required</p>}
        {errors.year?.type === 'min' && <p>Must be a valid year</p>}
        {errors.year?.type === 'max' && <p>Must be in the past</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}