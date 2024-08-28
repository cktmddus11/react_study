import { getEmotionImage } from '../util/get-emotion-image.js';
import Button from './Button';
import './DiaryItem.css';


const DiaryItem = ({ id, content, createDate, emotionId}) => {
    const emotionImg = getEmotionImage(1);
    debugger;
    return (
        <div className="DiaryItem">
            <div className={`img_section img_section_${1}`}>
                <img src={emotionImg} />
            </div>
            <div className="info_section">
                <div className="created_date">{"ㄴㅇㄹ"}</div>
                <div className='content'>{"ㄴㅇㄹ"}</div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"} />
            </div>

            {/* emotionID : {emotionId},
            createDate : {createDate},
            content : {content} */}
        </div>
    )
};
export default DiaryItem;