# 10.1) 최적화란?


## 최적화란(Optimization)
- 웹 서비스의 성능을 개선하는 모든 행위를 일컫음.
- 아주 단순한 것부터 아주 어려운 방법까지 다양함.

## 일반적인 웹 서비스 최적화 방법.
- 서버의 응답속도 개선. 
- 이미지, 폰트, 코드 파일 등 정적 파일 로딩 개선
- 불필요한 네트워크 요청 줄임.

## React App 내부의 최적화 방법
- 컴포넌트 내부의 불필요한 연산 방지
- 컴포넌트 내부의 불필요한 함수 재생성 방지 
- 컴포넌트의 불 필요한 리렌더링 방지.
 => useMemo

--- 

# 10.2) useMemo
- "메모이제이션" 기법을 기반으로 불필요한 연산을 최적화하는 리엑트 훅.
- (자매품 : useCallback)

- 반복적으로 수행되는 동일한 연산을 메모리에 저장해두고 동일한 연산이면 동일한 작업을 수행하도록 함.
```jsx
import React, { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const computedValue = useMemo(() => {
    // 시간이 오래 걸리는 연산
    return data.reduce((acc, val) => acc + val, 0);
  }, [data]);

  return <div>{computedValue}</div>;
}
```

## 10.3) React.memo란?
- 컴포넌트를 인수로 받아 최적화된 컴포넌트로 만들어 반환하는 고차 컴포넌트(HOC)
- 부모컴포넌트가 리렌더링 되더라도 Props가 바뀌지 않았다면 자식컴포넌트가 리렌더링 되지않도록 memo를 이용해 최적화할 수 있다. 
```jsx
import React, { memo } from 'react';
 //    반환값 : 최적화된 컴포넌트            // 인수 컴포넌트
const MemoizedComponent = memo(function Component({ value }) {
  console.log("Rendering:", value);
  return <div>{value}</div>;
});
//    Props를 기준으로 메모아제이션됨

```



## 고차 컴포넌트(HOC)
- [HOC패턴](https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/)
- 컴포넌트에 기능을 추가하는 패턴입니다. HOC는 컴포넌트를 인수로 받아 새로운 컴포넌트를 반환합니다.


## useCallback 과 함수 재생성 방지.
- 함수의 재생성을 방지하여 렌더링 될때마다   
불필요한 함수생성을 방지하여 최적화한다. 
```jsx
import React, { useCallback } from 'react';

function MyComponent() {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // 빈 배열은 함수가 단 한 번만 생성됨을 보장합니다.

  return <button onClick={handleClick}>Click me</button>;
}
```


## 최적화를 어떻게 진행할까?
1. **기능**: 최적화할 기능을 식별합니다.
2. **최적화**: 필요한 곳에만 최적화를 적용합니다.

## 최적화를 어떨때 진행할까?
- 함수, 연산, 컴포넌트. 꼭 필요한 거에만.
- 단순한 컴포넌트들은 안하는게 더 나음(ex. Header)
- 함수가 많이 포함된 컴포넌트 등에 적용.


## 아래 내용참조
- [When to use useMemo and useCallback](https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/)
```
 useCallback과 useMemo를 사용함으로써

- 동료가 보기에 코드가 더 복잡해 질 수 있고
- dependencies 배열을 잘못 사용할수도 있으며
- 내부 훅을 호출함으로써 성능상 안쓰느니 못하게 만들 수도 있고
- dependency들과 memoized된 값들이 가비지 컬렉터가 안되게 만들수도 있습니다. 굳이 성능상 이점을 원한다면 위 비용들의 발생을 감수할수도 있지만 손익분실 계산이 최우선이 되어야 합니다."
```

---
# 추가 내용

1) useMemo와 useCallback의 차이
- **`useMemo`**: 값의 메모이제이션을 위해 사용됩니다. 특정 값이 변경되지 않는 한, 계산된 값을 재사용합니다.
- **`useCallback`**: 함수의 메모이제이션을 위해 사용됩니다. 함수가 의존성 배열의 값이 변경되지 않는 한, 동일한 함수 인스턴스를 반환합니다.

```jsx
import React, { useMemo, useCallback } from 'react';

function ExampleComponent({ numbers, onClick }) {
  // useMemo 사용 예
  const total = useMemo(() => numbers.reduce((acc, num) => acc + num, 0), [numbers]);

  // useCallback 사용 예
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // 의존성 배열이 빈 경우, 컴포넌트가 마운트 될 때만 함수 생성

  return (
    <div>
      <p>Total: {total}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

---

2) React.StrictMode와 최적화
- **`React.StrictMode`**: 개발 모드에서 컴포넌트의 문제를 발견하도록 돕는 도구입니다. 일부 리렌더링을 추가적으로 발생시켜 성능 문제를 발견할 수 있게 합니다. 프로덕션 빌드에서는 영향을 미치지 않습니다.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

---

3) Virtual DOM과 최적화
- **Virtual DOM**: 리액트는 Virtual DOM을 사용하여 실제 DOM 업데이트를 최소화합니다. 변경사항이 있을 때 Virtual DOM에서 먼저 업데이트를 수행하고, 실제 DOM에는 필요한 부분만 적용합니다.
- **Diffing 알고리즘**: 리액트는 효율적인 업데이트를 위해 Diffing 알고리즘을 사용하여 변경된 부분만 실제 DOM에 반영합니다.

---

# 10.7) 렌더링 최적화 전략
1. **컴포넌트 분리**: 컴포넌트를 잘게 나누어 재사용성과 유지보수성을 높이고, 불필요한 리렌더링을 줄입니다.
2. **지연 로딩 (Lazy Loading)**: 필요할 때만 컴포넌트를 로드하여 초기 로딩 속도를 개선합니다.

```jsx
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

---

4) 상태 관리 최적화
- **상태 최소화**: 전역 상태를 사용하는 경우, 필요한 상태만을 관리하여 복잡성을 줄입니다.
- **상태 분리**: 상태를 모듈화하여 컴포넌트 별로 관리할 수 있습니다.

```jsx
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

function StateProvider({ children }) {
  const [state, setState] = useState(null);
  
  return (
    <StateContext.Provider value={[state, setState]}>
      {children}
    </StateContext.Provider>
  );
}

function useGlobalState() {
  return useContext(StateContext);
}
```

---

이와 같은 추가적인 사항들을 참고하면 React 애플리케이션을 더욱 효율적으로 최적화할 수 있습니다.