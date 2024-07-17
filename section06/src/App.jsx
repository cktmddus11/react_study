import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useCount } from './hooks/useCount'


function App() {
  const { count, counterActions} = useCount();
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
        <Controller acions={counterActions} />
        {/* <Controller {...counterActions}/> */}

      </section>
      <div className='footer'>
        <br />
      </div>

    </div>
  )
}

export default App
