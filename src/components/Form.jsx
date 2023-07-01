export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submitted');
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
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
