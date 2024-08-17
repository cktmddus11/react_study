#  12. 감정일기장 프로젝트 
## 12.1) 프로젝트 소개 및 준비
### 감정 일기장 프로젝트 목표
- 1. 외부 폰트 사용법
- 2. 이미지 사용법(+최적화)
- 3. 다양한 페이지를 제공하는 방법
- 4. 공통 컴포넌트로 UI 요소 모듈화 
- 5. 복잡한 데이터를 다루는 방법
- 6. 리액트 앱을 실제로 배포하는 방법. 


## 12.2) 페이지 라우팅 1. 소개
- index : 메인 화면, 일기 목록
- new : 일기 신규 작성
- diary : 일기 상세 조회 및 수정

### 페이지 라우팅(Page Routing)?
- 경로에 따라 알맞은 페이지를 렌더링 하는 과정
ex) /new -> new 페이지 렌더링

### 페이지 라우팅 원리
* 전통적인 방식
- 1. Server Side Rendering :  client 가 특정 경로를 오청 하면 서버는 가지고있는 각 페이지의 html 에서 요청한 경로의 html 을 전달해주게 된다. 
- 2. Multi Page Application(MPA) : 애초에 서버가 여러개의 페이지를 가지고 있음. 많은 서비스가 사용하는 전통적인 방식.
- MPA 단점
- 1. 페이지의 이동을 빠르게 전환하기 힘듬. 
- 2. 요청이 새로올때마다 기존의 화면을 지우고 새로 그려야하기 때문에. 
- 3. 화면의 새로고침.깜빡임.
- 4. 서버의 부하가 심해짐.
```
=> 페이지 이동이 매끄럽지 않고 비효율적임.   
다수의 사용자 접속시 서버의 부하가 심해줌.
```

* React 에서는 
- SPA(Single Page Application) : 하나의 페이지를 가지고 JS 파일을 합쳐서 페이지를 만드는 방식.                                       
- 1.페이지 이동이 매끄럽고 효율적임. 다수의 사용자가 사용해도 크게 상관없음.                             
- 2. 하나의 화면 html 에 Js Files 를 하나로 합쳐서(Bundling) 브라우져에 전달(Bundle JS Files). 이를 Bite가 담당했었음.
```
=> 브라우저에서 Bundle JS File을 실행시켜서 컴포넌트 렌더링을 하여 화면에 그리는 방식을 "클라이언트 사이드 렌더링(Client Side Rendering)" 이라함. 
```
- 새로운 페이지 이동 요청이 오면 서버에 요청없이, 브라우저가 서버로 부터 받았던 JS File을 Bunding 하여 새로운 페이지에 필요한 컴포넌트들로 화면을 교체한다.    
=> React App 는 모든페이지, 컴포넌트의 정보가 포함되어있기 때문이다.  
- MPA 방식에서처럼 페이지 이동시 화면의 모든 요소를 교체했던 반면 SPA방식은 화면에서 필요한 요소(컴포넌트)만 교체하는 방식. 

##  12.3) 페이지 라우팅 2. 라우팅 설정하기
React Router(https://reactrouter.com/en/main)
```
npm i react-router-dom
```
1. main.jsx - <BrowserRouter /> 컴포넌트를 루트 컴포넌트로 위치
2. src/pages - 각 페이지 별 컴포넌트 생성 및 export
3. App.jsx - 각 페이지 컴포넌트 import
4. App.jsx - import { Routes, Route } from 'react-router-dom;   
             <Routes><Route path="/" element={<Home/>} />
### 주의 
     - Routes 컴포넌트 안에는 Route 컴포넌트만 호출할 수 있다. 
     - Routes 컴포넌트 밖에 추가한 것들은 모든 페이지에 렌더링된다. 


## 12.4) 페이지 라우팅 3. 페이지 이동
### 페이지 이동 두가지 방식 (1. 링크, 2. 특정 이벤트 시 이동 처리 )
1. App.jsx - import { Link } from 'react-router-dom';
```
  <div>
        <Link to={"/"}>Home</Link>
```
2. App.jsx - import { useNavigate } from 'react-router-dom';
```
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  }
    <button onClick={onClickButton}>New 페이지 이동</button>

```

## 12.5) 페이지 라우팅 4. 동적 경로
### 동적경로(Dynamic Segments) 란?
동적인 데이터를 담고있는 경로
ex) ~/product/1, ~/product/2 상품의 아이디가 url에 포함.

- Url Parameter : / 뒤에 아이템 id를 명시.   
                  아이템 id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용 
- Query String : ? 뒤에 변수명과 값 명시.   
                 검색어 등의 자주 변경되는 값을 주소로 명시 하기 위해 사용

### Url Parameter 설정 
1. App.jsx - <Route path="/diary/:id" element={<Diary />}></Route>
2. Diary.jsx - import { useParams } from "react-router-dom";   
```
 const params = useParams();
    return <>
        <div>{params.id} 일기입니다. </div>
```
### Query String
1. import { useSearchParams } from "react-router-dom";
 ```const [params, setParams] = useSearchParams();
    console.log(params.get("value"));
    ```