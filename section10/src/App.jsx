import { useState, useRef, useReducer, useCallback } from 'react'
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
  },[]);

  return (
    <>
      <div className='App'>
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />

        {/* <Exam /> */}
      </div>
    </>
  )
}

export default App


