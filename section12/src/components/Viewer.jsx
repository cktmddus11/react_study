import { getEmotionImage } from "../util/get-emotion-image.js";
import { emotionList } from "../util/constants.js";
import './Viewer.css';

const Viewer = ({ emotionId, content }) => {
    const emotionItem = emotionList.find((item) => String(item.emotionId) == String(emotionId));
    const emotionImg = getEmotionImage(emotionId);

    return <div className="Viewer">
        <section className="emotion_section">
            <h4>오늘의 감정</h4>
            <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                <img className="emotion_img" src={emotionImg} />
                <div>{emotionItem.emotinName}</div>

            </div>
        </section>

        <section className="content_section">
            <h4>오늘의 일기</h4>
            <div className="content_wrapper">
                <p>{content}</p>
            </div>
        </section>
    </div>
}
export default Viewer;