import './css/Editor.css';
import { useState, useRef } from "react";


const Editor = ({ onCreate }) => {
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
        if(content === ""){
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