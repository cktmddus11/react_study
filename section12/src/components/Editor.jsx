import EmotionItem from './EmotionItem.jsx';
import Button from './Button';
import { getTodayDate } from '../util/get-today-date.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Editor.css';


const emotionList = [
    {
        emotionId: 1,
        emotinName: "완전 좋음"
    }, {
        emotionId: 2,
        emotinName: "좋음"
    }, {
        emotionId: 3,
        emotinName: "그럭저럭"
    }, {
        emotionId: 4,
        emotinName: "나쁨"
    }, {
        emotionId: 5,
        emotinName: "끔찍함"
    }

];


const Editor = ({ onSubmit, initData }) => {
    const [input, setInput] = useState({
        createDate: new Date().getTime(),
        emotionId:3,
        content: ""
    });

    // initData가 업데이트될 때마다 input 상태를 동기화
    useEffect(() => {
        if(initData){
            setInput({
                ...initData,
                createDate : new Date(Number(initData.createDate)),
            });
        }
       
    }, [initData]); // initData가 변경될 때마다 실행

    const nav = useNavigate();

    const onChangeInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        if (name == 'createDate') { // input 태그의 name 속성값임
            value = new Date(value).getTime();
        }

        setInput({
            ...input, // 변경한 필드만 바꿈
            [name]: value
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(input);
    }
    const onClickCancelButton = () => {
        nav(-1);
    }

    // context 에서 create 하는 함수를 넘겨받아서 사용하고 있는데 
    // 이 컴포넌트는 edit 에서 도 동일하게 사용하기 때문에 page에 따라 다른 행위를 할 수 있도록 
    // new 에서는  onCreate , edit 에서는 onUpdate 를 부모컴포넌트로부터 넘겨받도록 한다. 
    // editor 컴포넌트에서는 onSubmit 로 넘겨받은 행위를 실행하도록 한다. 
    //  const { onCreate } = useContext(DiaryDispatchContext); 
    // function onClickComplete() {
    //     onCreate(input.createDate, input.content, input.emotionId);
    //     nav("/");
    // }

    return <div className="Editor">
        <section className="date_section">
            <h4>오늘의 날짜</h4>
            <input type="date" name="createDate"
                value={getTodayDate('YYYY-MM-DD', input.createDate)}
                onChange={onChangeInput} />
        </section>
        <section className="emotion_section">
            <h4>오늘의 감정</h4>
            <div className='emotion_list_wrapper'>
                {emotionList.map((item) => (
                    <EmotionItem key={item.emotionId} {...item}
                        onClick={() => onChangeInput({ // 이벤트 객체를 직접 만들어서 전달해야함. 
                            // 컴포넌트이기때문에 onChangeInput 만들어둔거에
                            // event 객체가 자동으로 안감.
                            target: {
                                name: "emotionId",
                                value: item.emotionId
                            }
                        })}
                        isSelected={item.emotionId === input.emotionId} />
                ))}
            </div>
        </section>
        <section className="content_section">
            <h4>오늘의 일기</h4>
            <textarea placeholder='오늘은 어땠나요?' name="content" value={input.content} onChange={onChangeInput} />
        </section>
        <section className="button_section">
            <Button text={"취소하기"} onClick={onClickCancelButton} />
            <Button text={"작성완료"} type={"POSITIVE"} onClick={onClickSubmitButton} /> {/*onClick={onClickComplete} /> */}
        </section>


    </div>
}
export default Editor;