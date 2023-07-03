import { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [date, setDate] = useState(undefined);

  return (
    <section className='body-font font-poppins flex flex-col gap-8'>
      <Form setDate={setDate} />
      <Result date={date} />
    </section>
  );
}

export default App;
