// import {  useSearchParams } from "react-router-dom";
import { useState } from "react";
import Header from '../components/Header';
import { getInputDate } from '../util/get-today-date.js';
import DiaryList from '../components/DiaryList';
import Button from '../components/Button';
import { useContext } from "react";
import { DiaryStateContext } from "../App.jsx";


function filterDiaryListForDate(thisMonth, diaryList) {
    // 이달의 시작일 (YYYY-MM-01 00:00:00)
    const begeinTime = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1
        , 0, 0, 0)
        .getTime();
    // 이달의 종료일 (다음달 1일의 00:00:00에서 1밀리초를 뺀 값)
    const endTime = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1
        , 0, 23, 59, 59)
        .getTime();
    return diaryList.filter(
        (item) =>
            item.createDate >= begeinTime && item.createDate <= endTime
    );
}


const Home = () => {
    const [thisMonth, setThisMonth] = useState(new Date());
    const diaryList = useContext(DiaryStateContext);

    const thisMonthDiaryList = filterDiaryListForDate(thisMonth, diaryList);

    const onClickLeftButton = () => {
       setThisMonth(new Date(thisMonth.setMonth(thisMonth.getMonth() - 1)));
    };

    const onClickRightButton = () => {
       setThisMonth(new Date(thisMonth.setMonth(thisMonth.getMonth() + 1)));
    }

    return <>
        <Header title={getInputDate('YYYY년 M월', thisMonth)}
            leftChild={<Button text={"<"} onClick={onClickLeftButton} />}
            rightChild={<Button text={">"} onClick={onClickRightButton} />} />
        <DiaryList diaryList={thisMonthDiaryList} />
    </>;
};


export default Home;

//const [params, setParams] = useSearchParams();