import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';

import { useState, useEffect, useRef } from 'react';


function App() {
  const [ count, setCount ]  = useState(0);
  const [ input, setInput ] = useState("");

  const isMount = useRef(false); // 아직 마운트 되지않음.

  // 마운트 => 업데이트 => 언마운트
  // 1. 마운트 - 마운트 되고 나서 한번만 실행시키고 싶은 코드 작성 useEffect 콜백함수사용.
  useEffect(() => {
    console.log("mount");
  }, [])
  // 2. 업데이트 - 값이 변경될때마다 실행시키고 싶으면 뒤에 deps없애고 사용
  useEffect(() =>{
    if(!isMount.current){ // 처음 마운트 되고 변경이 일어낫을 떄만 하려면 
      isMount.current = true; // 이렇게 ref 객체 이용
      return;
    }

    console.log("update");
  });
  // 3.  언마운트
  // Even 컴포넌트 참조


  // useEffect(callback, array);
  // useEffect(()=>{
  //     console.log(`count : ${count} / input : ${input}`);
  //   }, [ count , input]); // 배열의 값이 변경되면 callback함수 실행
  // => 의존성 배열 
  // dependency array
  // deps
  // => 배열에 들어가있는 count 값이 바뀔때만 실행됨.

/* Q. 그냥 이벤트 핸들러 함수에 해당 로직을 작성하면 되는거
 아닌가요?
   A. useState 의 set함수는 비동기로 동작하기 때문.
   함수동작은 setCount(count+value)값을 더한거 같지만
   동작은 나중에 한것이기 때문에 콘솔에는 증가가 되지않은
   값이 출력됨.(호출은 된거지만 완료가 된건아님)
*/

  const countAction = (value) => {
    setCount(count + value);
    // console.log(count);
  }


  return (
    <div className="App">
      <div className='header'>
        <br />
      </div>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} 
        onChange={(e) => {
            setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
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
