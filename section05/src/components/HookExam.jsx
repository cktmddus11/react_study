//import { useState } from 'react';
import { useInput } from '../hooks/useInput';


/*
const state = useState();
React Hook "useState" cannot be called at the top level.
React Hooks must be called in a 
React function component or a custom React Hook function.
1. 함수 컴포넌트내에 포함되어야함.
*/

//function useInput(){
//function setInput(){
    /*   
    
    React Hook "useState" is called in function "setInput" 
    that is neither a React function component nor a 
    custom React Hook function. React component names must start
     with an uppercase letter. React Hook names must start with the word "use".
    */
   // 3. 중복으로 작성되는 코드를 Custom Hook으로 제작할 수 있음
   // 이때 input state를 관리하는 Custom Hook를 만든다고 했을 때 
   // 일반 function 에서는 useState훅이 호출 불가능하다. 
   // Hook Function 을 만들기 위해서 useXXX 접두사를 붙여줘야한다. 
//     const [input, setInput] = useState();

//     const onChange = (e) => {
//         setInput(e.target.value);
//     }
//     return [input, onChange];
// }


const HookExam = () => {
    // if(true){
    //     const state = useState();
    // }
    // React Hook "useState" is called conditionally. 
    // React Hooks must be called in the exact same order
    // in every component render. 
    // 2. 조건문에 Hook사용안됨. 렌더링 순서가 꼬이게됨.

    const [input, onChange] = useInput("");

    return <div>
            <input onChange={onChange} value={input} /> {input}
    </div>;
};
export default HookExam;