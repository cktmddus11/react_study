import './css/TodoItem.css';
import { useState, memo } from "react";

const TodoItem = ({ id, content, date, isDone, onUpdate, onDelete }) => {
    //const [isChecked, setIsChecked] = useState(isDone);


    const onChangeChecked = (event) => {
    //    setIsChecked(event.target.checked);
        onDoneUpdate(event.target.checked);
    };
    const onDoneUpdate = (checked) => {
        onUpdate(id);
    }
    const onClickDeleteButton = () => {
        onDelete(id);
    } //  바로 onDelete를 onClick에 쓰면 안됨
    // 처음에 todo 랜더링되면서 실행되기때문


    return <div className="TodoItem">
        <input type="checkbox"
           // checked={isChecked}
            onChange={onChangeChecked}
        />
        <div className="content"
            style={{
                // textDecoration: isChecked
                //     ? 'line-through' : 'none'
            }}>{content}
        </div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
        { }
    </div>
}
export default memo(TodoItem);

// 고차 컴포넌트(HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // callback함수를 커스터마이징하면 스스로 props가 변경됐는지
//     // 확인하는게 아니라 callback함수를 통해 판단하게됨.
//     // T -> Props 바뀌지 않음 => 리렌더링 X
//     // F -> Props 바뀜. => 리렌더링 O

//     //  id, content, date, isDone, onUpdate, onDelete 
//     // props 중 함수를 제외한 값들로만 비교하도록 작성.

//     if(prevProps.id !== nextProps.id){
//         return false;
//     }
//     if(prevProps.content !== nextProps.content){
//         return false;
//     }
//     if(prevProps.date !== nextProps.date){
//         return false;
//     }
//     if(prevProps.isDone !== nextProps.isDone){
//         return false;
//     }
//     return true;
// });
// 이런다고 todoItem 이 리렌더링이 발생하지 않음. 왜일까?
// => 1. 체크박스를 클릭하면 App컴포넌트의 todo state값이 바뀌게 됨
// 2. 그러면서 App컴포넌트는 리렌더링이 발생하기 때문에 
// 3. App컴포넌트에 있는 onUpdate, onDelete와 같이 함수들도 
//    재생성되기 때문에 변경되었다고 판단하고 리렌더링이 발생하는거임.

// 함수들도 객체임 => 주소값 기반으로 저장함. 
// memo 는 내부적으로 props가 변경이 됏는지 안됐는지 를 체크함.
// 이떄 앝은 복사를 하기 때문에 주소값 비교를 하게 됨.