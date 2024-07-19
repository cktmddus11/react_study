<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->



# Counter App 컴포넌트 계층 구조 
```  
    부모          App 
    자식  Viewer      Controller
```    
    
###  Viewer에서 useState???
- Viewer에서 useState를 이용해서 현재 count하고 있는 값을 
관리한다해서 Controller에서는 이 count의 값을 버튼을 누를때마다 
증가 시켜줘야하기 때문에 setCount 는 Controller컴포넌트에서 이루어져야한다.    
즉, setCount를 props 를 이용해서 전달해줘야하는데 이는 자식 컴포넌트간에서는 불가능하다. 
따라서 부모인 App에서 useState를 이용해서 state를 관리하고 이 값을 props를 이용해 자식 객체에게 전달해줘야한다.


#### 내가한거랑 강사가 한거랑 다른점
- app에서 이벤트 헨들러 함수를 구현하고
이를 conterller 로 넘겨주고 controller에서는 이 이벤트 핸들러를 적용시켜줌.
- 나는 hook을 사용해버려서 각 버튼별 이벤트 핸들러를 각각 구현해버림. controller에 있는 각 버튼별 증감해야하는 값을 
활용하지 못함. 중복된함수들을 여러개 만들게됨.

# 중요
- 1. 리엑트에서 컴포넌트들은 부모-자식 계층관계를 이룬다.
- 2. 특정 컴포넌트가 다른 컴포넌트에게 값을 전달하기 위해선    
두 컴포넌트는 계층 관계여야한다. 
- 3. 하나의 state를 여러 컴포넌트에서 관리하게 될 경우
두 컴포넌트의 공통컴포넌트이 부모컴포넌트에서 관리해야한다.  
```       
          [count, setCount]
    부모          App 
    자식  Viewer      Controller
         받은 count     받은 이벤트 핸들러

    => State Lifting (State 끌어 올리기)
```
# 리엑트에서 데이터 흐름은 위에서 아래로. 하강 구조를 가진다.
-  단방향 데이터 흐름. (그렇기 때문에 데이터의 흐름을 쉽게 파악할 수 있다. )
- 컴포넌트의 계층관계를 잘 설계해서 구현해야한다. 