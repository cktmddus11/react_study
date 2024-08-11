import {
  useState,
  useRef, useReducer, useCallback,
  createContext, useMemo
} from 'react'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

import mockData from './data/mockData.js';

// import Exam from './components/Exam';
import './App.css'



function reducer(state, actoin) {
  switch (actoin.type) {
    case 'CREATE':
      return [...state, actoin.data];
    case 'UPDATE':
      return state.map((todo) => todo.id == actoin.targetId
        ? { ...todo, isDone: !todo.isDone }
        : todo
      );
    case 'DELETE':
      return state.filter((state) => state.id !== actoin.targetId);
    default:
      state;
  }
}

// context : 컴포넌트 외부에 생성. 컴포넌트 리렌더링 시 재생성 되지 않게
// 하기 위해서
// Provider : 1.공급받을 컴포넌트 지정. 1.공급할 데이터 지정.
// 컴포넌트이므로 App컴포넌트 내부에 사용하고 Editor 컴포넌트 외부를 감싸서 사용.
// export const TodoContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoStateContext = createContext();




function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);


  // useCallback :deps에 빈배열을 두어
  // 컴포넌트가 처음으로 mount될때 실행할 함수가 정의되도록
  // 함
  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }, []);

  const onUpdate = useCallback((targetId) => {
    // 변경할 targetId만 보냄.
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    })
  }, []);

  const onDelete = useCallback((targetId) => {
    // 삭제할 targetId만 보냄.
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    })
  }, []);


  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete }
  }, []);

  return (
    <>
      <div className='App'>
        <Header />
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            <Editor />
            <List todos={todos}
              onUpdate={onUpdate}
              onDelete={onDelete} />
            {/* <Exam /> */}
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  )
}

export default App


