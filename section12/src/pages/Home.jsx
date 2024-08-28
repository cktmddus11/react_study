import { useSearchParams } from "react-router-dom";
import Header from '../components/Header';
import { getTodayDate } from '../util/get-today-date.js';
import DiaryList from '../components/DiaryList';
import Button from '../components/Button';

const Home = () => {
    const [params, setParams] = useSearchParams();

    const today = getTodayDate('YYYY년 M월');

    return <>
        <Header title={today}
            leftChild={<Button text={"<"} />}
            rightChild={<Button text={">"} />}/>
        <DiaryList />
    </>;
};


export default Home;