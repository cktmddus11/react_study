//import {format} from 'date-fns';
import './css/TodoItem.css';
import { useState } from "react";


const TodoItem = ({ todo, onUpdate, onDelete }) => {
    const [isChecked, setIsChecked] = useState(todo.isDone);


    const onChangeChecked = (event) => {
        setIsChecked(event.target.checked);
        onDoneUpdate(event.target.checked);
    };
    const onDoneUpdate = (checked) => {

        if (checked) {
            onUpdate(todo.id);
        }
    }
    const onClickDeleteButton = () => {
        onDelete(todo.id);
    } //  바로 onDelete를 onClick에 쓰면 안됨
     // 처음에 todo 랜더링되면서 실행되기때문


    return <div className="TodoItem">
        <input type="checkbox"
            checked={isChecked}
            onChange={onChangeChecked}
        />
        <div className="content"
            style={{
                textDecoration: isChecked
                    ? 'line-through' : 'none'
            }}>{todo.content}
        </div>
        <div className="date">{todo.date}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
        { }
    </div>
}
export default TodoItem;