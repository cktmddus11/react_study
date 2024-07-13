import './App.css';
import { useState } from "react";

function App() {
  // const state = useState(4);
  // console.log(state); /* {0 : undefined 초기값, 
  //                         1  function() state를 변환하는 함수, 상태변환하는 함수} 
  //                     */
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  console.log(count);


  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={() => {
          setLight(light === 'ON' ? "OFF" : "ON");
        }}>전구 {light === 'ON' ? "끄기" : "키기"}</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => {
          setCount(count + 1);
        }}>+</button> 
        
        {/** Q.그냥 이런 상태감지 javascript로 처리하면 안되는건가? 
         *    그럼 버튼 컴포넌트 자체가 리렌더링이 되는게 아님 값만 바뀌는거임
         *  그래서 화면에서 변화가 없을거
        */}
      </div>
    </>
  )
}
export default App;
