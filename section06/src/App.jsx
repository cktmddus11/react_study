import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';

import { useState } from 'react';
function App() {
  const [ count, setCount ]  = useState(0);
  const countAction = (value) => {
    setCount(count + value);
  }


  return (
    <div className="App">
      <div className='header'>
        <br />
      </div>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller countAction={countAction} />
        {/* <Controller {...counterActions}/> */}

      </section>
      <div className='footer'>
        <br />
      </div>

    </div>
  )
}

export default App
