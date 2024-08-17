import { useParams } from "react-router-dom";

const Diary = () => {
    const params = useParams();
    return <>
        <div>{params.id} 일기입니다. </div>
        DIARY
    </>;
};
export default Diary;