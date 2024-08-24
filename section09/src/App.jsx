import { useState, useRef, useReducer } from 'react'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';


import mockData from './data/mockData.js';

// import Exam from './components/Exam';
import './App.css'



function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'UPDATE':
      return state.map((todo) => todo.id == action.targetId
        ? { ...todo, isDone: !todo.isDone }
        : todo
      );
    case 'DELETE':
      return state.filter((state) => state.id !== action.targetId);
    default:
      state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }

  const onUpdate = (targetId) => {
    // 변경할 targetId만 보냄.
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    })
  }

  const onDelete = (targetId) => {
    // 삭제할 targetId만 보냄.
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    })
  }

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



// const onUpdate = (targetId) => {
//   // todos state의 값들 중에
//   // targetId 와 일치하는 id를 갖는 투두 아이템의 isDone 변경
//   // todos 배열을 복제합니다.
//   const updatedTodos = [...todos];

//   // targetId에 해당하는 항목을 찾습니다.
//   const todoIndex = updatedTodos.findIndex(todo => todo.id === targetId);

//   // 해당 항목이 존재할 경우, isDone 값을 변경합니다.
//   if (todoIndex !== -1) {
//     updatedTodos[todoIndex] = {
//       ...updatedTodos[todoIndex],
//       isDone: true
//     };
//   }

//   // 새로운 배열로 상태를 설정합니다.
//   setTodos(updatedTodos);


// }