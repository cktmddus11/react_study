# plugin - eslintrc 설치


# JSX
- Javascript Extensions 확장된 자바스크립트 문법
- Javascript function 에 html 을 리턴할 수 있도록 하는 등.
- JS 와 HTML 을 혼용해서 사용 가능.
- 동적으로 HTML 렌더링 가능.
함수안에 변수를 선언해서 html 내부에 {변수} 로 값을 넣을 수 있음.

# JSX 주의사항
1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
2. 숫자, 문자열, 배열 값만 랜더링 된다. 
3. 모든 태그는 닫혀있어야 한다. 
4. 최상위 태그는 반드시 하나여야만 한다. 

# jsx style 지정 
1. 직접 style 지정. css 처럼 데쉬 쓰는게 아니라 카멜케이스 적용.
=> 가독성 안좋음.
2. 별도의 css에 작성 후 import 한다. 
=> class예약어 그대로 사용 불가능해서 className으로 지정한다. 



# Props 로 데이터 전달하기
## Props란? 
- 부모컴포넌트가 자식컴포넌트에게 값을 전달할 수 있음. properties 같은거
- 부모에서 자식으로만 가능하다. 역순은 리액트에서 불가능하다. 


# 이벤트 헨들링 처리하기
## 이벤트 헨들링이란? 
- 이벤트가 발생했을 때 그것을 처리하는 것.
ex) 버튼 클릭시 경고창 노출.

## 합성 이벤트( Synthetic Base Event) 
- 어떤 브라우저마다 Event 객체가 서로 다름.
- Cross brosing Issue 브라우저 별 스팩이 달라 발생하는 문제.
=> 합성 이벤트 (통일된 규칙)

# State 로 상태 관리하기
## State 란?
- state를 갖는 React 컴포넌트 
=> state 의 값에 따라 렌더링 되는 UI가 결정된다. 
- 상태변환 감지. 리렌더, 리렌더링
- 컴포넌트에 다양한 state 생성 가능.
- const state = useState(); state 값, state 상태변환함수.


# State를 Props로 전달하기
-  리렌더링 발생
1. state변경
2. 부모에서 넘겨받은 props 값이 변경되면
3. 부모 컴포넌트가 리렌더링 되면 
=> 부모컴포넌트가 리렌디링이 되면 자식 컴포넌트까지 리렌더링이 발생하기 때문이다. 
이렇게 불필요한 리렌더링이 발생하지 않도록 각 state가 연관되어있지 않다면 
컴포넌트를 분리하고 각 컴포넌트마다 state를 관리하고 부모컴포넌트에 생성하는 것이 좋다.




# useRef 로 컴포넌트 변수 관리하기
## 새로운 Reference 객체를 생성하는 기능.
- const refObject = useRef();
- useState 값이 변경되면 리렌더링됨.
- useRef 어떤 경우에도 리렌더링을 유발하지 않음.
- DOM 요소 조작. 리렌더링이되지않고 화면에 값을 저장해야할때.


# React Hooks  
클래스 컴포넌트의 기능을 함수컴포넌트에서도 이용할 수 있도록 
하는 메서드.

## 2017 React.js
- Class 컴포넌트 주로 이용.
모든 기능을 이용할 수 있음. 
ex State, Ref, etc 
문법이 복잡함. 
- Function 컴포넌트 
UI렌더링만 할 수 있음.
=>>> Function 컴포넌트에서도 모든기능을 사용할 수 있도록 React Hooks 적용.
- useState : State 기능을 낚아채오는 Hook
- useRef : Reference 기능을 낚아채오는 Hook
공통적으로 use 접두사를 사용함.



## React Hook 주의
- 함수 컴포넌트 내부에서만 호출가능.
- 조건문, 반복문 내부에서는 호출 불가.
- use접두사를 이용해서 나만의 Hook 제작 가능. ex) function useInput