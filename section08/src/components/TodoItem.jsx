//import {format} from 'date-fns';
import './css/TodoItem.css';
import { useState } from "react";


const TodoItem =  ({todo, id}) => {
    const [isChecked, setIsChecked] = useState(todo.isDone);

    const onChangeChecked = (event) => {
        setIsChecked(event.target.checked);
    };
    const done = () =>{
        todo.isDone = true;
    }


    return <div className="TodoItem"> 
        <input type="checkbox" checked={isChecked} onChange={onChangeChecked}/>
        <div className="content">{todo.content}</div>
        <div className="date">{todo.date}</div>
        <button>삭제</button>
        {}
    </div>
}
export default TodoItem;