# useReducer
- 컴포넌트 내부에 새로운 State를 생성하는 React Hook 
- 모든 useState는 useReducer 로 대체 가능.
- useState와 차이점 : 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음.

```javascript 

function reducer() {
      // ...
}
function App(){
      const [todos, dispactch] = useReducer(reducer);
}


```
