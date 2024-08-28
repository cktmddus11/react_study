import Header from '../components/Header';
import Button from '../components/Button';

import { useParams } from "react-router-dom";



const Edit = () => {
    const param = useParams();

    return <>
        <Header title={"새 일기 쓰기"} 
            leftChild={<Button text="< 뒤로 가기" />}/>
        {param.id}
    </>;
};
export default Edit;