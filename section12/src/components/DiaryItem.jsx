import { getEmotionImage } from '../util/get-emotion-image.js';
import { getInputDate } from '../util/get-today-date.js';
import Button from './Button';
import './DiaryItem.css';
import { useNavigate } from 'react-router-dom';


const DiaryItem = ({ id, content, createDate, emotionId }) => {
    const nav = useNavigate();

    const onClickDiaryDetail = () => {
        nav(`/diary/${id}`);
    }

    const onClickModifyButton = () => {
        nav(`/edit/${id}`);
    }

    const emotionImg = getEmotionImage(emotionId);
    return (                       
        <div className="DiaryItem"> {/*  onClick={onClickDiaryDetail} 여기 있으면 안됨.이벤트 버블링 발생함. */}
            <div className={`img_section img_section_${emotionId}`} onClick={onClickDiaryDetail}>
                <img src={emotionImg} />   {/*  버튼 클릭 이벤트가 부모 요소로 전파되어 부모 onClick 핸들러도 실행하는 것.*/}
            </div>
            <div className="info_section">
                <div className="created_date">{getInputDate('YYYY.MM.DD', createDate)}</div>
                <div className='content'>{content}</div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"} onClick={onClickModifyButton} />
            </div>

            {/* emotionID : {emotionId},
            createDate : {createDate},
            content : {content} */}
        </div>
    )
};
export default DiaryItem;