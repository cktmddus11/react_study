import { useSearchParams } from "react-router-dom";
import Header, { getTodoDate } from '../components/Header';


const Home = () => {
    const [params, setParams] = useSearchParams();

    const today = getTodoDate('YYYY년 M월');

    return <>
        <Header title={today} leftChild={"<"} rightChild={">"} />

    </>;
};
export default Home;