import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';
import './css/List.css';


const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const getAnalyzedData = () => { // 검색할 때는 렌더링 되며 재호출될필요없음. 이런경우 useMemo
        console.log("getAnalyzedData() call");
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = todos.filter((todo) => !todo.isDone).length;

        return { totalCount, doneCount, notDoneCount };
    }

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        return getAnalyzedData();
    }, [todos]);
    // 의존성 배열 : deps
    // useEffect 와 같이 deps값이 바뀌면 callback를 다시 실행하는 훅.
    // 1. callback 함수결과 그대로 반환
    // 2. 첫번째 전달한 callback함수를 deps를 기준으로 메모리제이션함.

    // const {totalCount, doneCount, notDoneCount } = getAnalyzedData()

    const onSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
    }

    const filteredTodos = () => {
        if (search == "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase()))
    }
    const filterTodos = filteredTodos();

    return <div className='List'>
        <h4>Todo List 🌱</h4>
        <div>totalCount : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>not done : {notDoneCount}</div>


        <input placeholder="검색어를 입력하세요" onChange={onSearchChange} />
        <div className="todo_wrapper">
            {filterTodos.map((todo, key) => (
                <TodoItem {...todo} onUpdate={onUpdate} onDelete={onDelete} key={key}/>
            ))}

        </div>

    </div>
}
export default List;             
         