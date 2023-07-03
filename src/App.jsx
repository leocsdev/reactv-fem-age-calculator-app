import { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [date, setDate] = useState(undefined);

  return (
    <main className='body-font font-poppins h-screen flex flex-col p-4 items-center justify-center bg-offWhite text-[24px]'>
      <section className='bg-white px-6 py-14 rounded-3xl rounded-br-[96px] max-w-3xl'>
        <Form setDate={setDate} />
        <Result date={date} />
      </section>
    </main>
  );
}

export default App;
