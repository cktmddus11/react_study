import DiaryItem from './DiaryItem';
import Button from './Button';

import { useContext } from "react";
import { DiaryStateContext } from "../App.jsx";

import './DiaryList.css';

const DiaryList = () => {
    const data = useContext(DiaryStateContext);

    return (
        <div className="DiaryList">
            <div className='menu_bar'>
                <select id=''>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새로운 일기 쓰기"} type={"POSITIVE"} />
            </div>
            <div className='list_wrapper'>
            <DiaryItem  />
                {
                data.map((item, key) => {
                    console.log(item);
                    <DiaryItem {...item} key={key}/>
                })}
            </div>
        </div>
    )
}
export default DiaryList;