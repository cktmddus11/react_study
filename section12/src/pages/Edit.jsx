import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from '../App';
import  useDiary  from '../hooks/useDiary.jsx';


const Edit = () => {
    const param = useParams();
    const nav = useNavigate();
    const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
    const currentDiaryItem = useDiary(param.id);

    const onSubmit = (input) => {
        if (!window.confFirm("일기를 정말 수정할까요?")) {
            return;
        }

        let targetId = param.id;
        onUpdate(targetId, input.createDate, input.content, input.emotionId);
        nav('/', { replace: true })
    }
    const onClickDeleteButton = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            let targetId = param.id;
            onDelete(targetId);
            nav("/", { replace: true }) //  {replace : true} 뒤로가기 방지
        }
    }

    //  const getCurrentDiaryItem = () => {
    //     const currentDiaryItem = data.find((item) => item.id == param.id); // filter는 배열로 리턴함
    //     if(!currentDiaryItem){ // null 이거나 undefined falsy 한 값이면
    //         window.alert("존재하지 않는 일기입니다.");
    //         nav("/", {replace : true}); // navigate 함수는 컴포넌트가 다 랜더링 되고나서 동작할 수 
    //     }                       // 있기 때문에 지금 처럼 화면에 랜더링 되면서 바로 호출되는 함수로
    //                             // 구현되면 안됨 useEffect를 이용해서 처음 렌더링 될떄 호출되도록 해야함
    //                             // 왜? navigate함수는 Router함수가 공급하는 기능이기 때문. 
    //     return currentDiaryItem;
    // } 
    // useEffect(() => {
    //     const currentDiaryItem = data.find((item) => String(item.id) == String(param.id)); // filter는 배열로 리턴함
    //     if (!currentDiaryItem) { // null 이거나 undefined falsy 한 값이면
    //         window.alert("존재하지 않는 일기입니다.");
    //         nav("/", { replace: true }); // navigate 함수는 컴포넌트가 다 랜더링 되고나서 동작할 수 
    //     }                       // 있기 때문에 지금 처럼 화면에 랜더링 되면서 바로 호출되는 함수로
    //     // 구면되면 안됨 useEffect를 이용해서 처음 렌더링 될떄 호출되도록 해야함
    //     // 왜? navigate함수는 Router함수가 공급하는 기능이기 때문. 
    //     setCurrentItemDiary(currentDiaryItem);
    // }, [param.id, data]);

    return (
        <div>
            <Header title={"새 일기 쓰기"}
                leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)} />}
                rightChild={<Button text="삭제하기" type={"NAGATIVE"} onClick={onClickDeleteButton} />} />
            <Editor onSubmit={onSubmit} initData={currentDiaryItem} />
        </div>
    );
};
export default Edit;