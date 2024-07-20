import { useState, useRef } from 'react'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';


import './App.css'

const mockData = [
  {
    id : 0,
    isDone : false, 
    content : "React 공부하기", 
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : true, 
    content : "하남가기", 
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false, 
    content : "노트북 세팅하기", 
    date : new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false, 
      content : content,
      date : new Date().getTime(),
    };
    //setTodos(todos.push(newTodo)); // 이게 아니네 
    setTodos([...todos, newTodo ])
  }

  return (
    <>
      <div className='App'>
        <Header />
        <Editor onCreate={onCreate}/>
        <List todos={todos}/>
      </div>
    </>
  )
}

export default App
