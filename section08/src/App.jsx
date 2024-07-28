import { useState, useRef } from 'react'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';


import './App.css'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "하남가기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노트북 세팅하기",
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    //setTodos(todos.push(newTodo)); // 이게 아니네 
    setTodos([...todos, newTodo])
  }

  const onUpdate = (targetId) => {
    // todos state의 값들 중에 
    // targetId 와 일치하는 id를 갖는 투두 아이템의 isDone 변경


    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 
    // 데이터만 딱 바꾼 새로운 배열.
    setTodos(todos.map((todo) => todo.id == targetId
      ? { ...todo, isDone: !todo.isDone }
      : todo
    ));
  }

  const onDelete = (targetId) => {
    const deleteAfterTodos = todos.filter((todo) => todo.id !== targetId);
    setTodos(deleteAfterTodos);
  }

  return (
    <>
      <div className='App'>
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
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