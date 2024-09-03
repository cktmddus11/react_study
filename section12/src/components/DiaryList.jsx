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
    const getSortDiaryList = () => {
        switch (sortType) {
            case "latest": //중요 ! 원본배열을 직접 바꾸면 안되기 때문에 toSorted() 또는 [...array].sort()조합으로 사용해야함.                
                return [...diaryList].sort((a, b) => Number(b.createDate) - Number(a.createDate));
            case "oldest":
                return diaryList.toSorted((a, b) => Number(a.createDate) - Number(b.createDate));
        }
    };
    const sortDiaryList = getSortDiaryList();
    // console.log(sortDiaryList);
    const onChangeSort = (event) => {
        const sortOrder = event.target.value;
        setSortType(sortOrder);
    }

    return (
        <div className="DiaryList">
            <div className='menu_bar'>
                <select id='' onChange={onChangeSort}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새로운 일기 쓰기"} type={"POSITIVE"} onClick={onClickNewDiary} />
            </div>
            <div className='list_wrapper'>
                {
                    sortDiaryList.map((item) => (
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