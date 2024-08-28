import Header from '../components/Header';
import Button from '../components/Button';
import { getTodayDate } from '../util/get-today-date.js';
import { DiaryDispatchContext } from '../App';
import { useContext  } from 'react';


const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    function onClick() {

        onCreate();
    }

    return <>
        <Header title={"새 일기 쓰기"} 
            leftChild={<Button text="< 뒤로 가기" />} />

        <div>오늘의 날짜</div>
        <input type="date"
                value={getTodayDate('YYYY-MM-DD')}
            
                />
        <div>오늘의 감정</div>
        <div>
            <Button text={"완전좋음"} type={"veryGood"}/>
            <Button text={"좋음"} type={"good"}/>
            <Button />
            <Button />
            <Button />
        </div>
        <div>오늘의 일기</div>
        <textarea />
        <div>
            <Button text="취소하기"/> <Button text="작성완료" 
            onClick={onClick}/>
        </div>
    </>;
};
export default New;