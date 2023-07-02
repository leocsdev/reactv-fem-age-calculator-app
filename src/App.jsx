import { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [date, setDate] = useState(undefined);

  const getDate = (date) => {
    setDate(date);
  };

  return (
    <section className='body-font font-poppins flex flex-col gap-8'>
      <Form getDate={getDate} />
      <Result date={date} />
    </section>
  );
}

export default App;
