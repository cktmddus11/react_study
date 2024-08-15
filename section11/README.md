# React Context

## Context란?
- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존의 Props가 가지고 있던 단점을 해결할 수 있음.


## Props단점
- 1. Props Drilling : 부모 => 자식으로만 데이터를 전달 할 수 있음. 
```
ex) App => ChildA => ChildB 
     바로 App => ChildB가 불가능.
    App => List => TodoItem 
      onUpdate, onDelete 를 계속 넘겨줘야함.
    
    >>> 중간에 Context에 onUpdate, onDelete 등을 저장해두면 자식컴포넌트보다 더 하위 컴포넌트까지 사용할 수 있음.
```
=>  하나의 Context에 모든걸 저장했더니 적용 후 memo로 최적화 해둔게 적용이 안됨 => 모두 리렌더링이 발생함. 


##  Context 분리하기 
- 1. AS-IS : TodoContext 에 todo, onCreate... 이렇게 저장해두었음.   
=> todo 가 변경 되며 props로 전달받는 todo가 바뀌기 때문에  TodoContext.Provider컴포넌트가 리렌더링이 발생함. 그래서 하위컴포넌트들이 다 리렌더링 되게 됨.   
```
Q. App.jsx 에서 함수를 정의할 떄 useCallback, 각 하위컴포넌트에서 useMemo를 이용해서 최적화한거이닌가요?    
A. TodoContext.Provider가 리렌더링이 발생하기 때문에 props로 전달한 객체들도 다시 생성되게 되기 때문에 최적화가 풀리게됨.
```
- 2. TO-BE : TodoContext를 나눠서 변경될 수있는 값과 변경될 값을 나누어서 저장하도록 변경.