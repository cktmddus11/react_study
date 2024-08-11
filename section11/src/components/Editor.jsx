import { useState, useRef, useContext } from 'react';
import './css/Editor.css';
import { TodoDispatchContext } from '../App';


const Editor = () => {
    const { onCreate } = useContext(TodoDispatchContext); 
    // context에 모든 값이 들어있기 떄문에 구조분해할당을로 필요한 onCreate만 읽어옴.
    
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    const onKeyDown = (event) => {
        if (event.key === 'Enter') { // event.keyCode === 13 
            onSubmit();
        }
    };

    const onSubmit = () => {
        if (content === "") {
            alert("Todo를 입력해주세요");
            contentRef.current.focus();
            return;
        }
        onCreate(content)
        setContent("");
    }

    return <div className="Editor">
        <input
            ref={contentRef}
            placeholder="새로운 Todo..."
            value={content}
            onKeyDown={onKeyDown}
            onChange={onChangeContent} />
        <button onClick={onSubmit}>추가</button>


    </div>
}
export default Editor;