# useReducer
- 컴포넌트 내부에 새로운 State를 생성하는 React Hook 
- 모든 useState는 useReducer 로 대체 가능.
- useState와 차이점 : 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음.

```javascript 
function reducer(state, action) {
      // ...
       console.log(state, action); // 0,  {type: 'INCREASE', data: 1}
}
function App(){
      const [todos, dispactch] = useReducer(reducer, 0);
      const onClickPlus = () => {
            // 인수 : 상태가 어떻게 변화되기를 원하는지.
            // => 액션 객체
            dispatch({
                  type : "INCREASE", 
                  data : 1
            })
      }
}
```
* dispatch : 발송하다, 급송한다. 
=> 상태변화가 있어야한다는 사실을 알리는, 발송하는 함수.

* reducer : 변환기
=> 상태를 실제로 변환시키는 변환기 역할

> 동작 순서 
1. dispatch 객체에 액션 객체를 넣어줌 
2. useReducer로 인해 reducer함수가 호출함. 
3. reducer 함수는 state 객체와 dispatch에서 넘겨준 액션 객체를 받고 
   액션대로 상태를 변화시킴