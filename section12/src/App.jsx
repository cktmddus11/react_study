import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import { Routes, Route } from 'react-router-dom';
import { useReducer, useRef, createContext } from 'react';


// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(), // timestamp 
    emotionId: 3,
    content: "1번 일기"
  },
  {
    id: 2,
    createDate: new Date().getTime(), // timestamp 
    emotionId: 1,
    content: "2번 일기"
  }
]


function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) == String(action.data.targetId)
          ? {
            ...item,
            createDate: action.data.createDate,
            content: action.data.content,
            emotionId: action.data.emotionId
          } /* 1. state 배열의 diary 항목을 map을 이용해 반복한다.
             2. targetId로 변경할 다이어리의 객체를 찾는다. 
             3. targetId가 일치하면 스프레드 연산자를 이용해 해당 객체의 
                 일부 속성은 유지하고 변경할 속성들만 변경해준다.  
        */
          : item
      );
    case 'DELETE':
      return state.filter((diary) => String(diary.id) != String(action.targetId));
    /* 삭제 항목을 제외한 diary 배열을 필터링 하여 리턴한다. */
  }
  return state;
}
export const DiaryDispatchContext = createContext();
export const DiaryStateContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);


  // 새로운 일기 추가 
  const onCreate = (createDate, content, emotionId) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createDate: createDate,
        emotionId: emotionId,
        content: content
      }
    })
  }
  // 기존 일기 수정
  const onUpdate = (targetId, createDate, content, emotionId) => {
    dispatch({
      type: 'UPDATE',
      data: {
        targetId: targetId,
        createDate: createDate,
        content: content,
        emotionId: emotionId
      }
    })
  }
  // 기존 일기 삭제
  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId
    })
  }

  return (
    <>
      <button onClick={() => {
        onCreate(
          new Date().getTime(), "추가", "2"
        )
      }}>추가 테스트</button>
      <button onClick={() => {
        onUpdate(
          "3", new Date().getTime(), "수정", "3"
        )
      }}>수정 테스트</button>
      <button onClick={() => {
        onDelete(
          "3"
        )
      }}>삭제 테스트</button>

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate, onUpdate, onDelete
        }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<New onCreate={onCreate} />}></Route>
            <Route path="/diary/:id" element={<Diary />}></Route>
            <Route path="/edit/:id" element={<Edit onUpdate={onUpdate} />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App

// import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// import { getEmotionImage } from './util/get-emotion-image.js';

// import Button from './components/Button';
{/* 주의 
     - Routes 컴포넌트 안에는 Route 컴포넌트만 호출할 수 있다. 
     - Routes 컴포넌트 밖에 추가한 것들은 모든 페이지에 렌더링된다. 
    */}
// const nav = useNavigate();
// const onClickButton = () => {
//   nav("/new");
// }
// return (
//   <>
{/* <Button text="완전 좋음" type={'DEFAULT'} />
      <Button text="좋음" type={'POSITIVE'} />
      <Button text="그저그럼" type={'NORMAL'} />
      <Button text="나쁨" type={'BAD'} />
      <Button text="나쁨" type={'NAGATIVE'} /> */}



//     <div>
//       <img src={getEmotionImage(1)} />
//       <img src={getEmotionImage(2)} />
//       <img src={getEmotionImage(3)} />
//       <img src={getEmotionImage(4)} />
//       <img src={getEmotionImage(5)} />

//     </div>
//     <div> {/* html 의 a herf 와 동일하지만
//              클라이언트 사이드 렌더링 방식으로 렌더링 됨.  */}
//       <Link to={"/"}>Home</Link>
//       <Link to={"/new"}>New</Link>
//       <Link to={"/diary"}>Diary</Link>
//     </div>
//     <button onClick={onClickButton}>New 페이지 이동</button>
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/new" element={<New />}></Route>
//       <Route path="/diary/:id" element={<Diary />}></Route>
//       <Route path="*" element={<Notfound />}></Route>
//     </Routes>
//   </>
// );