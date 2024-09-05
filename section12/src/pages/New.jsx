import Header from '../components/Header';
import Editor from '../components/Editor.jsx';
import Button from '../components/Button';


const New = () => {
    return <>
        <Header title={"새 일기 쓰기"} 
            leftChild={<Button text="< 뒤로 가기" />} />
        <Editor />
    </>;
};
export default New;