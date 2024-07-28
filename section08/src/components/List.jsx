import TodoItem from './TodoItem';
import { useState } from 'react';
import './css/List.css';

const List = ({ todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");

    const onSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
    }

    const getFilterTodos = () => {
        if (search == "") {
            return todos;
        }
        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase()))
    }
    const filterTodos = getFilterTodos();

    return <div className='List'>
        <h4>Todo List 🌱</h4>
        <input placeholder="검색어를 입력하세요" onChange={onSearchChange} />
        <div className="todo_wrapper">
            {filterTodos.map((todo, index) => (
                <TodoItem todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
            ))}

        </div>

    </div>
}
export default List;