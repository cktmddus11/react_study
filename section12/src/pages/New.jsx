import Header from '../components/Header';
import Editor from '../components/Editor.jsx';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import { useContext } from 'react';

const New = () => {
    const nav = useNavigate();
    const { onCreate } = useContext(DiaryDispatchContext); 

    const onClickButton =() => {
      //  nav("/");
      nav(-1);  // -1 이전페이지로 이동
    }

    const onSubmit = (input) => { // editor 컴포넌트에서 넘겨준 input 값
        onCreate(input.createDate, input.content, input.emotionId);
        nav("/", { replace : true });
    }
 
    return <>
        <Header title={"새 일기 쓰기"} 
            leftChild={<Button text="< 뒤로 가기" onClick={onClickButton} />} />
        <Editor onSubmit={onSubmit} />
    </>;
};
export default New;