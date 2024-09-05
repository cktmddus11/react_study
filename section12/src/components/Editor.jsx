import EmotionItem from './EmotionItem.jsx';
import Button from './Button';
import { getTodayDate } from '../util/get-today-date.js';
import { DiaryDispatchContext } from '../App';
import { useContext, useState } from 'react';
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


const Editor = () => {
    const [emotionId, setEmotionId] = useState(1);


    const { onCreate } = useContext(DiaryDispatchContext);
    function onClickComplete() {

        onCreate();
    }
    const onClick = (selectedEmotionId) => {
        setEmotionId(selectedEmotionId);
    }

    return <div className="Editor">
        <section className="date_section">
            <h4>오늘의 날짜</h4>
            <input type="date" value={getTodayDate('YYYY-MM-DD')}
            />
        </section>
        <section className="emotion_section">
            <h4>오늘의 감정</h4>
            <div className='emotion_list_wrapper'>
                {emotionList.map((item) => (
                    <EmotionItem key={item.emotionId} {...item}
                        isSelected={item.emotionId === emotionId} onClick={() => onClick(item.emotionId)} />
                ))}
            </div>
        </section>
        <section className="content_section">
            <h4>오늘의 일기</h4>
            <textarea placeholder='오늘은 어땠나요?' />
        </section>
        <section className="button_section">
            <Button text={"취소하기"} /> 
            <Button text={"작성완료"} type={"POSITIVE"}
                onClick={onClickComplete} />
        </section>


    </div>
}
export default Editor;