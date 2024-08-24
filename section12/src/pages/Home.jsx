import { useSearchParams } from "react-router-dom";
import Header from '../components/Header';
import { getTodayDate } from '../util/get-today-date.js';

const Home = () => {
    const [params, setParams] = useSearchParams();

    const today = getTodayDate('YYYY년 M월');

    return <>
        <Header title={today} leftChild={"<"} rightChild={">"} />

    </>;
};
export default Home;