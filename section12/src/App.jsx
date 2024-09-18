import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import { Routes, Route } from 'react-router-dom';
import { useReducer, useRef, createContext, useEffect, useState } from 'react';


// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
// const mockData = [
//   {
//     id: 1,
//     createDate: new Date('2024-08-31').getTime(), // timestamp 
//     emotionId: 3,
//     content: "1번 일기"
//   },
//   {
//     id: 2,
//     createDate: new Date('2024-08-30').getTime(), // timestamp 
//     emotionId: 1,
//     content: "2번 일기"
//   },
//   {
//     id: 3,
//     createDate: new Date('2024-07-30').getTime(), // timestamp 
//     emotionId: 1,
//     content: "3번 일기"
//   },
//   {
//     id: 4,
//     createDate: new Date('2024-09-30').getTime(), // timestamp 
//     emotionId: 1,
//     content: "4번 일기"
//   },
//   {
//     id: 5,
//     createDate: new Date('2024-09-02').getTime(), // timestamp 
//     emotionId: 4,
//     content: "5번 일기"
//   }
// ]


function reducer(state, action) {
  let nextState;

  switch (action.type) { // switch 문에서 break를 사용하지 않으면 코드가 다음 case로 "fall through" 하여, 조건이 맞지 않아도 그 다음 코드 블록이 실행됨
    case "INIT":
      return action.data;
    case 'CREATE':
      {
        nextState = [...state, action.data];
        break;
      }
    case 'UPDATE':
      {
        nextState = state.map((item) =>
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
        )
        break;
      };
    case 'DELETE':
      {
        nextState = state.filter((diary) =>
          String(diary.id) != String(action.targetId));
        /* 삭제 항목을 제외한 diary 배열을 필터링 하여 리턴한다. */
        break;
      }
  }
  // console.log(action.data);
  // console.log(nextState);
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
  // return state;
}
export const DiaryDispatchContext = createContext();
export const DiaryStateContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, [])//mockData);
  const idRef = useRef(0);//useRef(mockData[mockData.length - 1].id);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > 0) {
        maxId = Number(item.id);
      }
    })
    idRef.current = maxId++;
    //console.log(parseData);
    dispatch({
      type: "INIT",
      data: parsedData
    })
    setIsLoading(false);
  }, []);


  // localStorage.setItem("test", "hello") // 키값 : 문자열이나 숫자만 가능.
  //localStorage.setItem("person", JSON.stringify({ name: "차승연" }));
  // localStorage 는 문자열 형태로 값을 저장하기 때문에 객체를 저장하면
  // [object Object]로 저장됨.
  //const person = localStorage.getItem("person")
  //console.log(JSON.parse(person)); // 주의 : JSON.parse 는 undefined 가 넘어가지 않도록해야함. 

  // 새로운 일기 추가 
  const onCreate = (createDate, content, emotionId) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: 'CREATE',
      data: {
        id: ++idRef.current,
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
  if(isLoading){ // app컴포넌트에서 data state가 세팅되기전에 data 에 있는
    // diary 데이터를 조회할 시에 data를 찾지못하는 걸 방지하기 위해  app컴포넌트가
    return <div> 데이터 로딩중 입니다 ...</div> // 랜더링 되기 전까지 loading을 두어 
  }                           // 컴포넌트가 모두 랜더링이 되면 로딩을 해제한다.

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate, onUpdate, onDelete
        }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/diary/:id" element={<Diary />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;

{/* <button onClick={() => {
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
}}>삭제 테스트</button> */}
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