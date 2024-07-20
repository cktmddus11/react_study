import TodoItem from './TodoItem';
import './css/List.css';

const List = ({todos}) => {
    return <div className='List'>
        <h4>Todo List 🌱</h4>
        <input placeholder="검색어를 입력하세요" value="" />
        <div className="todo_wrapper">
            {todos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}

        </div>

    </div>
}
export default List;