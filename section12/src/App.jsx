import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  {/* 주의 
     - Routes 컴포넌트 안에는 Route 컴포넌트만 호출할 수 있다. 
     - Routes 컴포넌트 밖에 추가한 것들은 모든 페이지에 렌더링된다. 
    */}
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  }

  return (
  <>
    <div> {/* html 의 a herf 와 동일하지만
               클라이언트 사이드 렌더링 방식으로 렌더링 됨.  */}
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>
    </div>
    <button onClick={onClickButton}>New 페이지 이동</button>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new" element={<New />}></Route>
      <Route path="/diary" element={<Diary />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  </>
  );
}

export default App