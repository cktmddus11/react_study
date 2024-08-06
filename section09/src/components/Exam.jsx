import { useReducer } from "react";

// reducer : 변환기
// => 상태를 실제로 변환시키는 변환기 역할
function reducer(state, action) {
    console.log(state, action); // 0,  {type: 'INCREASE', data: 1}if
    // if(action.type == 'INCREASE'){
    //     return state + action.data; // 내부적으로 state객체를 바꿔주기만 하면 setState를 한것처럼 
    //                                 // state 값을 갱신해줌

    // }else if(action.type == 'DECREASE'){
    //     return state - action.data;
    // }

    switch(action.type){
        case 'INCREASE': return state + action.data;
        case 'DECREASE': return state - action.data;
        default: state
    }
    

}


const Exam = () => {
    // dispatch : 발송하다, 급송한다. 
    // => 상태변화가 있어야한다는 사실을 알리는, 발송하는 함수.
    
    /* 동작 순서 
       1. dispatch 객체에 액션 객체를 넣어줌 
       2. useReducer로 인해 reducer함수가 호출함. 
       3. reducer 함수는 state 객체와 dispatch에서 넘겨준 액션 객체를 받고 
          액션대로 상태를 변화시킴
       */
    const [state, dispatch ] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수 : 상태가 어떻게 변화되기를 원하는지.
        // => 액션 객체
        dispatch({
            type : "INCREASE", 
            data : 1
        })
    }

    const onClickMinus = () => {
        // 인수 : 상태가 어떻게 변화되기를 원하는지.
        // => 액션 객체
        dispatch({
            type : "DECREASE", 
            data : 1
        })
    }

    return <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>- </button>

    </div>
}
export default Exam;