import Header from '../components/Header';
import Viewer from "../components/Viewer.jsx";
import { getInputDate } from '../util/get-input-date.js';
import { useParams, useNavigate } from "react-router-dom";
import Button from '../components/Button'
import useDiary from "../hooks/useDiary";
import { usePageTitle } from '../hooks/usePageTitle.jsx';

const Diary = () => {
    const param = useParams();
    const nav = useNavigate();
    usePageTitle(param.id+"번 일기")

    const currentDiaryItem = useDiary(param.id);
    console.log(currentDiaryItem);
    // const today = getInputDate('YYYY-MM-DD', currentDiaryItem.createDate);

    if(!currentDiaryItem){ // useDiary hook 은 내부적으로 useEffect에서 일기 상세 데이터를 조회하기 때문에
        return <div>데이터 로딩중 ... ! </div> // 컴포넌트가 렌더링된 이후에 실행되기 때문에 Diary 를 한번 렌더링 후에 실행됨. 
    }                                       // 그래서 첫번째 조회에선 undefined를 리턴함.
                                            // 그래서 Viewer에 props로 전달한 값들도 못읽어와서 View컴포넌트도 렌더링이 되지않음.
    const { createDate, emotionId, content } = currentDiaryItem;

    return <div className="Diary">
        <Header
            title={getInputDate('YYYY-MM-DD', createDate)+" 기록"}
            leftChild={<Button text={'< 뒤로 가기'} onClick={() => nav(-1)} />}
            rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${param.id}`)} />} />
        <Viewer emotionId={emotionId} content={content} />
    </div>;
};
export default Diary;