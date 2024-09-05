import { getEmotionImage } from "../util/get-emotion-image";
import './EmotionItem.css';

const EmotionItem = ({ emotionId, emotinName, isSelected }) => {
    const emotionImage = getEmotionImage(emotionId);
    return <>
        <div className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}>
            <img className="emotion_img" src={emotionImage} />
            <div className="emotion_name">{emotinName}</div>
        </div >
    </>
}
export default EmotionItem;
