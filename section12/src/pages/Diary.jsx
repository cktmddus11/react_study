import { useParams } from "react-router-dom";
import Header from '../components/Header';
import { getTodayDate } from '../util/get-today-date.js';


const Diary = () => {
    const params = useParams();
    const today = getTodayDate('YYYY-MM-DD');
    // const leftChild = {
    //     text : "< 뒤로 가기", 
    //     onClick : () =>  {
    //         return "../"; 
    //     }
    // }
    return <>
        <Header title={today} leftChild={'< 뒤로 가기'} rightChild={"수정하기"} />

        <div>{params.id} 일기입니다. </div>
        DIARY
    </>;
};
export default Diary;