import DiaryItem from './DiaryItem';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './DiaryList.css';



const DiaryList = ({ diaryList }) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");

    const onClickNewDiary = () => {
        nav("/new")
    }
    const onChangeSort = (event) => {
        const sortOrder = event.target.value;
        // let sortedArray = [];

        // switch(sortOrder){
        //     case "latest":
        //         sortedArray = [...diaryList].sort((a, b) => b.createDate - a.createDate);
        //     case "oldest":
        //         sortedArray = [...diaryList].sort((a, b) => a.createDate - b.createDate);
        //     default:
        //         sortedArray = [...diaryList];
        // }   
        // setSortType(sortedArray);
    }
   
    return (
        <div className="DiaryList">
            <div className='menu_bar'>
                <select id='' onChange={onChangeSort}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새로운 일기 쓰기"} type={"POSITIVE"} onClick={onClickNewDiary}/>
            </div>
            <div className='list_wrapper'>
                {
                    diaryList.map((item) => (
                        <DiaryItem key={item.id} {...item} />
                    ))
                    /* map 함수의 콜백 함수에서 return 키워드를 사용하거나, 소괄호 ()를 사용하여 반환할 JSX를 감싸는 방법을 사용했습니다. 
                    소괄호로 감싸면 암시적 반환이 이루어지며, JSX가 반환됩니다.*/
                }
            </div>
        </div>
    )
}
export default DiaryList;