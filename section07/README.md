# 7.1 라이프사이클이란? 

## 리액트 컴포넌트의 라이프 사이클 
1. Mount (like. 탄생)
- 컴포넌트가 탄생하는 순간. 
- 회면에 처음 렌더링 되는 순간. 

2. Update (like. 변화)
- 컴포넌트가 다시 렌더링 되는 순간.
- 리렌더링 될 때를 의미

3. UnMount (like. 죽음)
- 컴포넌트가 화면에서 사라지는 순간
- 렌더링에서 제외되는 순간을 의미

=> 각 상태에 따라 실행되는 작업을 구현하게됨.
=> 라이프사이클 제어. => useEffect 를 이용하면 쉬움?
ex) 
mount : 서버에서 데이터를 불러오는 작업.
update : 어떤 값이 변경되었는지 콘솔에 출력.
unMount : 컴포넌트가 사용하던 메모리 정리.



# 7.2 useEffect 사용하기

## 사이드 이펙트(SideEffect)란?
- 부수적인 효과, 파생되는 효과
- 컴포넌트의 동작에 따라 파생되는 여러효과


--- 
`useEffect`는 리액트 함수형 컴포넌트에서 **컴포넌트의 생명주기(Lifecycle)**를 관리할 수 있게 해주는 훅(Hook)입니다. 클래스형 컴포넌트의 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`와 같은 생명주기 메서드를 대체할 수 있습니다.

리액트에서 컴포넌트가 **렌더링되거나, 업데이트되거나, 언마운트될 때** 특정 로직을 실행해야 할 때 `useEffect`를 사용합니다.

---

## `useEffect`의 동작 원리

### 기본 사용법

```javascript
useEffect(() => {
  // 실행할 코드
});
```

위 코드는 컴포넌트가 **렌더링될 때마다** 실행됩니다. 리렌더링이 발생할 때마다 `useEffect`가 실행되는 것을 의미합니다.

### 마운트 시점에만 실행 (`componentDidMount`와 비슷한 동작)

```javascript
useEffect(() => {
  // 컴포넌트가 마운트될 때 한 번 실행됨
}, []);
```

`useEffect`의 두 번째 인수로 **빈 배열 `[]`**을 전달하면, 컴포넌트가 처음 마운트될 때만 한 번 실행됩니다. 이는 클래스형 컴포넌트의 `componentDidMount`와 비슷한 동작을 합니다.

### 특정 값이 변경될 때만 실행 (`componentDidUpdate`와 비슷한 동작)

```javascript
useEffect(() => {
  // 특정 값이 변경될 때 실행됨
}, [someValue]);
```

배열 안에 특정 상태나 props(`someValue`)를 넣으면, 그 값이 변경될 때마다 `useEffect`가 실행됩니다. 이를 통해 업데이트 시점에만 특정 로직을 실행할 수 있습니다.

### 정리(cleanup) 작업 (`componentWillUnmount`와 비슷한 동작)

```javascript
useEffect(() => {
  // 컴포넌트가 마운트되거나 someValue가 변경될 때 실행되는 코드

  return () => {
    // 컴포넌트가 언마운트되거나 someValue가 변경되기 직전에 실행되는 코드
  };
}, [someValue]);
```

`useEffect`에서 반환된 함수는 **정리(cleanup) 함수**로 동작합니다. 컴포넌트가 언마운트되거나, `someValue`가 변경되기 직전에 정리 작업이 수행됩니다. 이를 통해 메모리 누수나 불필요한 구독 등을 정리할 수 있습니다.

---

## `useEffect`의 라이프사이클 요약

1. **컴포넌트 마운트 시** (`[]` 또는 `특정 값이 없을 때`):
   - 처음 렌더링될 때 실행.
   
2. **컴포넌트 업데이트 시** (`[dependency]`에 특정 값이 있을 때):
   - 배열에 있는 값이 업데이트될 때 실행.
   
3. **컴포넌트 언마운트 시**:
   - 컴포넌트가 제거되기 직전에 정리 작업 실행 (cleanup).

---

## 예시 코드
- App.jsx 도 참고

```javascript
import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  // 1. 마운트 시 실행 및 매초 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // 2. 언마운트 시 실행될 정리(cleanup) 함수
    return () => {
      clearInterval(interval);
    };
  }, []); // 빈 배열이므로 마운트 시 한 번만 실행됨

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
};

export default TimerComponent;
```

### 설명
- 이 컴포넌트는 **타이머** 역할을 합니다. 초(`seconds`)가 1초마다 증가합니다.
- `useEffect`는 컴포넌트가 마운트될 때 **매초마다 실행되는 타이머**를 설정하고, **언마운트될 때 타이머를 정리**합니다.
- `useEffect`의 빈 배열(`[]`) 덕분에 이 타이머는 처음 렌더링될 때만 설정됩니다.

---
