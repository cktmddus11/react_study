# plugin - eslintrc 설치


# JSX
- Javascript Extensions 확장된 자바스크립트 문법
- Javascript function 에 html 을 리턴할 수 있도록 하는 등.
- JS 와 HTML 을 혼용해서 사용 가능.
- 동적으로 HTML 렌더링 가능.
함수안에 변수를 선언해서 html 내부에 {변수} 로 값을 넣을 수 있음.

```jsx
// JSX 예시
function MyComponent() {
  const title = "Hello, React!";
  return <h1>{title}</h1>; // 자바스크립트 표현식을 중괄호로 감싸 사용
}
```


# JSX 주의사항
1. 중괄호 내부에는 **자바스크립트 표현식**만 넣을 수 있음.
2. 숫자, 문자열, 배열 값만 렌더링 가능.
3. 모든 태그는 **닫혀 있어야** 함.
4. 컴포넌트는 하나의 최상위 태그만 리턴 가능.


# jsx style 지정 
1. 인라인 스타일 지정   
직접 style 지정. css 처럼 데쉬 쓰는게 아니라 카멜케이스 적용. => 가독성 안좋음.   
객체로 전달해야 함.
```jsx
function MyComponent() {
  return <div style={{ backgroundColor: 'blue', color: 'white' }}>Hello</div>;
}
```
2. 외부 CSS 파일 사용
별도의 css에 작성 후 import 한다. => class예약어 그대로 사용 불가능해서 className으로 지정한다. 
```jsx
import './MyComponent.css';

function MyComponent() {
  return <div className="myClass">Hello</div>;
}
```
---

# 5.4) Props 로 데이터 전달하기
## Props란? 
**Props**는 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달할 때 사용되는 속성입니다.

```jsx
function ParentComponent() {
  return <ChildComponent text="Hello" color="red" />;
}

function ChildComponent({ text, color }) {
  return <p style={{ color }}>{text}</p>;
}
```

- 부모컴포넌트가 자식컴포넌트에게 값을 전달할 수 있음. properties 같은거
- 부모에서 자식으로만 가능하다. 역순은 리액트에서 불가능하다. 
- 부모에서 자식으로 넘겨준 props값은 객체형태로 존재한다. 
  text={"메일"} color={"red"} => props = {"text":"메일", "color" :"red"}
- 넘겨받은 자식쪽에서는 객체를 해체해서 바로 사용가능
({text, color})
- props는 객체 뿐만아니라 html, 리엑트 컴포넌트도 전달할 수있다. 자식쪽에서 사용할떈 children이라는 객체로 사용할 수 있다.
({text, color, children})


### Props 규칙
- 부모에서 자식으로만 데이터 전달 가능.
- 전달된 `props`는 자식 컴포넌트에서 **읽기 전용**으로 사용해야 함.

--- 

# 이벤트 헨들링 처리하기
## 이벤트 헨들링이란? 
- 이벤트가 발생했을 때 그것을 처리하는 것.
ex) 버튼 클릭시 경고창 노출.
```jsx
function MyButton() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

## 합성 이벤트( Synthetic Base Event) 
리액트는 브라우저 간 이벤트 처리를 통일하기 위해 합성 이벤트 시스템을 사용합니다. 이를 통해 Cross Browsing Issue를 해결할 수 있습니다.
- 어떤 브라우저마다 Event 객체가 서로 다름.
- ***Cross brosing Issue*** 브라우저 별 스팩이 달라 발생하는 문제.
=> 합성 이벤트 (통일된 규칙)
--- 

# State 로 상태 관리하기

## State 란?
**State**는 리액트 컴포넌트에서 동적인 데이터를 관리할 수 있게 하는 기능입니다. `useState` 훅을 사용하여 상태를 정의할 수 있습니다.
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### State와 리렌더링
- 상태가 변경되면 컴포넌트가 리렌더링됩니다.
- 여러 개의 state를 가질 수 있습니다.
- state를 갖는 React 컴포넌트 
=> state 의 값에 따라 렌더링 되는 UI가 결정된다. 
- 상태변환 감지. 리렌더, 리렌더링
- 컴포넌트에 다양한 state 생성 가능.


# 5.7 State를 Props로 전달하기
부모 컴포넌트의 **state**를 자식 컴포넌트에 **props**로 전달할 수 있습니다.
```jsx
function Parent() {
  const [text, setText] = useState("Hello");

  return <Child text={text} />;
}

function Child({ text }) {
  return <p>{text}</p>;
}
```
-  리렌더링 발생
1. state변경
2. 부모에서 넘겨받은 props 값이 변경되면
3. 부모 컴포넌트가 리렌더링 되면 
=> 부모컴포넌트가 리렌디링이 되면 자식 컴포넌트까지 리렌더링이 발생하기 때문이다. 
이렇게 불필요한 리렌더링이 발생하지 않도록 각 state가 연관되어있지 않다면 
컴포넌트를 분리하고 각 컴포넌트마다 state를 관리하고 부모컴포넌트에 생성하는 것이 좋다.



# useRef 로 컴포넌트 변수 관리하기
`useRef`는 **DOM 요소**나 컴포넌트의 상태를 참조하고, 리렌더링 없이 값을 유지하는 데 사용됩니다.
## 새로운 Reference 객체를 생성하는 기능.
- useState 값이 변경되면 리렌더링됨.
- useRef 어떤 경우에도 리렌더링을 유발하지 않음.
- DOM 요소 조작. 리렌더링이되지않고 화면에 값을 저장해야할때.
```jsx
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```


### `useRef` 특징
- **리렌더링을 발생시키지 않음**.
- 주로 **DOM 접근**이나 **변수 저장**에 사용.

--- 


# React Hooks  
**React Hooks**는 함수형 컴포넌트에서 클래스 컴포넌트의 기능을 사용할 수 있게 해주는 함수들입니다.

### 주요 Hooks
1. **useState**: 상태 관리.
2. **useEffect**: 생명주기 관리.
3. **useRef**: DOM 접근 및 변수 저장.

```jsx
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <input ref={inputRef} />
    </div>
  );
}
```

## 2017 React.js
* Class 컴포넌트 주로 이용.   
모든 기능을 이용할 수 있음.    
ex) State, Ref, etc    
=> 문법이 복잡함. 

* Function 컴포넌트 
UI렌더링만 할 수 있음.   
=> Function 컴포넌트에서도 모든기능을 사용할 수 있도록 React Hooks 적용.
  - useState : State 기능을 낚아채오는 Hook   
  - useRef : Reference 기능을 낚아채오는 Hook   
  공통적으로 use 접두사를 사용함.



## React Hook 주의
1. **컴포넌트의 최상위 레벨**에서만 호출해야 함 (조건문이나 반복문 내부에서 호출 불가).
2. **Hooks**는 `use`로 시작해야 함.
3. 커스텀 훅을 제작하여 공통 로직을 재사용 가능.

```jsx
function useCustomHook() {
  const [value, setValue] = useState(0);

  return [value, setValue];
}
```