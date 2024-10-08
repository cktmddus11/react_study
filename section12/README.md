#  12. 감정일기장 프로젝트 
[완성본](https://emotion-diary.winterlood.com/)
## 12.1) 프로젝트 소개 및 준비
### 감정 일기장 프로젝트 목표
1. 외부 폰트 사용법
2. 이미지 사용법(+최적화)
3. 다양한 페이지를 제공하는 방법
4. 공통 컴포넌트로 UI 요소 모듈화 
5. 복잡한 데이터를 다루는 방법
6. 리액트 앱을 실제로 배포하는 방법. 


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
            1. 페이지의 이동을 빠르게 전환하기 힘듬. 
            2. 요청이 새로올때마다 기존의 화면을 지우고 새로 그려야하기 때문에. 
            3. 화면의 새로고침.깜빡임.
            4. 서버의 부하가 심해짐.
```
=> 페이지 이동이 매끄럽지 않고 비효율적임.   
다수의 사용자 접속시 서버의 부하가 심해줌.
```
![pageRouting](./pageRouting.png)

* React 에서는 
    - 1. SPA(Single Page Application) : 하나의 페이지를 가지고 JS 파일을 합쳐서 페이지를 만드는 방식.                                       
    - 2. 페이지 이동이 매끄럽고 효율적임. 다수의 사용자가 사용해도 크게 상관없음.                             
    - 3. 하나의 화면 html 에 Js Files 를 하나로 합쳐서(Bundling) 브라우져에 전달(Bundle JS Files). 이를 Bite가 담당했었음.
```
=> 브라우저에서 Bundle JS File을 실행시켜서 컴포넌트 렌더링을 하여 화면에 그리는 방식을 "클라이언트 사이드 렌더링(Client Side Rendering)" 이라함. 
```
- 새로운 페이지 이동 요청이 오면 서버에 요청없이, 브라우저가 서버로 부터 받았던 JS File을 Bunding 하여 새로운 페이지에 필요한 컴포넌트들로 화면을 교체한다.    
=> React App 는 모든페이지, 컴포넌트의 정보가 포함되어있기 때문이다.  
- MPA 방식에서처럼 페이지 이동시 화면의 모든 요소를 교체했던 반면 SPA방식은 화면에서 필요한 요소(컴포넌트)만 교체하는 방식. 



> React Router란?   
React Router는 React 애플리케이션에서 클라이언트 측 라우팅을 쉽게 구현할 수 있도록 도와주는 라이브러리입니다. 클라이언트 측 라우팅은 서버가 아닌 클라이언트(브라우저)에서 URL을 변경하여 서로 다른 페이지를 보여주는 방식입니다.   
기본적으로 React는 **단일 페이지 애플리케이션(SPA)**을 구축하는 데 사용됩니다.   
단일 페이지 애플리케이션은 하나의 HTML 파일로 구동되며, 페이지 이동 시마다 전체 페이지를 새로 고침하지 않고, URL만 변경되며 페이지 일부를 갱신하는 방식으로 동작합니다. React Router는 이러한 동작을 가능하게 하여 사용자가 다른 페이지로 이동하는 것처럼 보이게 합니다.


##  12.3) 페이지 라우팅 2. 라우팅 설정하기
React Router(https://reactrouter.com/en/main)
Routes는 React Router에서 여러 라우트 경로를 정의하는 컨테이너입니다.
Route는 각 URL 경로와 연결된 컴포넌트를 렌더링하는 역할을 합니다.
```
npm i react-router-dom
```
1. main.jsx - <BrowserRouter /> 컴포넌트를 루트 컴포넌트로 위치
2. src/pages - 각 페이지 별 컴포넌트 생성 및 export
3. App.jsx - 각 페이지 컴포넌트 import
4. App.jsx - import { Routes, Route } from 'react-router-dom;   
             <Routes><Route path="/" element={<Home/>} />
```jsx
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

```

### 주의 
     - Routes 컴포넌트 안에는 Route 컴포넌트만 호출할 수 있다. 
     - Routes 컴포넌트 밖에 추가한 것들은 모든 페이지에 렌더링된다. 


## 12.4) 페이지 라우팅 3. 페이지 이동
### 페이지 이동 두가지 방식
1. 링크
```jsx
  <div>
        <Link to={"/"}>Home</Link>
  </div>
```
2. 특정 이벤트 시 이동 처리 
```jsx

  import { useNavigate } from 'react-router-dom';

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
```jsx
 const params = useParams();
    return <>
        <div>{params.id} 일기입니다. </div>
```
### Query String
1. import { useSearchParams } from "react-router-dom";
 ```const [params, setParams] = useSearchParams();
    console.log(params.get("value"));
```

## 12.6) 폰트, 이미지, 레이아웃 설정하기
### 폰트
1. public 정적 파일 저장하는 폴더에 폰트 파일 이동
2. index.css : font-face 지정. body 태그 모든하위 요소에 폰트 적용

###  이미지
1. asserts 폴더에 이미지 파일 이동.
2. App.jsx 에 이미지 파일 import 
3. javascript img 태그 src 요소로 이미지 연결

### public, asserts ? 
- public 경로에 이미지 넣어도됨. 이떄 import 로 불러오는게 아니라 
```
<img src={"/emotion1.png"}>  
```
를 통해 바로 불러올 수 있음.   

> 그러나 asserts는 public 경로의 이미지를 경로를 통해 불러오게 되면 이미지 최적화가 동작하지 않음.

=> 배포명령어를 입력해서 실제 배포되는 파일을 통해 vite가 assets 폴더 이미지를 어떻게 최적화하는지 볼 수있음.

### 배포 스크립트 후 개발자 도구로 최적화 확인해보기 
1. npm run build >> dist라는 폴더가 생기게 됨 >> 빌드 결과. 모든 코드가 압축되어 bundling 되어있음. 
2. 개발자 도구 >> elements 탭에서 각 이미지 태그를 확인해보면 public 에 있는 이미지는 일반 경로 url로 되어있는 반면 asserts 에 있는 이미지들은 data uri 로 되어있음.     
```
data uri
- 외부데이터들을 문자열 형태로 캐싱하기 위해서 브라우저 메모리에 캐싱하기 위해서 사용되는 포맷.
```
따라서 public에 있는 이미지들은 매번 서버로 요청이가게 되고, asserts 는 캐싱된 이미지를 렌더링한다.   
이를 네트워크 탭 > img > 네트워크 유지(로그보존) 체크 하여 
크기 및 시간이 최적화 된 모습을 확인 할 수 있다. 

> 그러나 이미지가 많아지면 이미지를 모두 브라우저 메모리에 캐싱하게 되면서 오히려 브라우저에 부담을 주게 된다. 따라서 이미지가 다수인경우는 public 폴더에서 불러오게 하고 소수인 경우 asserts 경로를 이용하도록 하자.


## 12.7) 공통 컴포넌트 구현하기.
> ***진행 순서***   
> 1. 라우팅 설정, 글로벌 레이아웃 설정. 
> 2. 공통 컴포넌트 구현
> 3. 개별 페이지 복잡한 기능 구현.



## 12.8) 일기 관리 기능 구현하기 
- App.jsx 에서 state를 관리하기 위해서 reducer 를 구현함. 

## 12.9) 일기 관리 기능 구현하기 2
- App.jsx 에 추가, 수정, 삭제 함수를 구현함.
1. 기본 데이터 이후 id를 구현하기 위해 useRef 사용
    => 참조 ref 객체값의 current로 사용.
2. reducer 에 action type별로 행위들을 구현해줌. 
3. context 를 이용해 구현한 추가,수정, 삭제 메서드, data state를 다른 페이지에서도 
사용할 수 있도록 함.

## 12.10) Home 페이지 구현하기 1. UI
컴포넌트 
- Header
- DiaryList 
- DiaryItem

## 12.11) Home 페이지 구현하기 2. 기능 
- Home.jsx 좌, 우 버튼 별 날짜 이동. => 여기도 useState로 변경필요
- 버튼 클릭시 해당 월의 일기만 조회되도록 필터링.
- DiaryItem 눌렀을 떄 상세페이지로 이동, 수정버튼 클릭해서 해당 일기의 상세페이지로 이동.
- 새로운 일기 쓰기 버튼
- 조회된 일기 리스트 최신순, 오래된순 정렬 => 간단하니까 useState로 처리.   
[useState vs useReducer](./useReducer,useState.md)
- [강의자료 Array.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)


## 12.11) Home 페이지 구현하기 3. 회고
- diary 데이터 관리를 위해 useReducer 사용
  - app.jsx에 있는 이유는 모든 컴포넌트에서 이데이터를 사용해야하기 때문에.
  - context 를 이용해 부모에서 자식방향으로 전달가능해서.
- Context 이용해서 props Driling 방지하며 모든 페이지에 diary data 전달
- 현재월을 useState 에 저장해두어 좌, 우 버튼 이동시에 사용


## 12.13) New 페이지 구현하기 1. UI 
컴포넌트 구성   
- Header
- Editor
  - EmotionItem


## 12.14) New 페이지 구현 기능 2. 기능
- 뒤로가기 버튼 구현



## 12.17) 웹 스토리지 이용하기
- 웹 스토리지(Web Storage) : 데이터를 브라우저에 보관하는 방법, 일종의 데이터베이스
- 배포 준비하기 : 프로젝트를 배포하기 전, 타이틀, Favicon, OG 설정 진행.
- 배포하기 : 리액트 앱을 배포하는 방법

### 최적화는 언제 필요할까?
- 비용이 많이 드는 계산   
  ex) API 호출해서 ~ 데이터를 가공하고 ~ 하는 등등의 작업
- 매우 여러번, 반복적으로 실행되는 연산   
  ex) API 호출해서 ~ 데이터를 가공하고 ~ 하는 등등의 작업들

### 웹 브라이저 내장 DB - Web Storage
- 웹 브라우저에 기본적으로 내장되어 있는 데이터베이스
- 별도의 프로그램 설치 필요 X, 라이브러리 설치 필요 X
- 그냥 자바스크립트 내장함수 만으로 접근 가능.

- ex)    
    값을 저장 : localStorage.setItem(key, value)  
    값을 꺼냄 : localStorage.getItem(key)
    값을 삭제 : localStorage.removeItem(key)


### SessionStorage, LocalStorage
storage에서 값을 꺼내는 문법은 동일함.
- SessionStorage
  - 브라우저 탭 별로 데이터를 보관
  - 탭이 종료되기전에는 데이터 유지(새로고침 시에도 유지)
  - 탭이 종료되거나 꺼지면 데이터 삭제
- LocalStorage
  - 사이트 주소별로 데이터 보관
  - 사용자가 직접 삭제하기 전까지 데이터 보관

### LocalStorage 확인
- chrome > Applicatin > Storage > Local Storage
사이트별로 보관되고 있음.
- 저장 
  - 문자열 형태로 값을 저장하기 때문에 객체를 저장하면 [object Object]로 저장됨.    
  => JSON.stringfy 메서드로 문자열로 변환해서 저장하기.
- 조회 
  - JSON.parse 메서드로 문자열 json 을 객체로 파싱
  - 주의 : JSON.parse 는 undefined 가 넘어가지 않도록해야함. 에러남.
```javascript
  localStorage.setItem("person", JSON.stringify({ name: "차승연" }));
  const person = localStorage.getItem("person")
  console.log(JSON.parse(person));
```

## 12.18) 배포 준비를 위해 해야할 작업
1. 페이지 타이틀 설정하기
  - index.html 의 title을 변경해주면됨.
  - 각 페이지마다 다른 title을 하고 싶으면 페이지 렌더링 시에 돔을 조작해주면됨. 
  - 공통된 로직이므로 hook 을 이용해 각 페이지가 렌더링이 될떄 title이 변경되면 title 돔을 변경해주도록 useEffect 코드를 작성함.
2. Favicon 설정하기
  - public 경로에 이미지를 올려둠.
  - index.html 에 <link ref="icon" ...href=""> 을 아이콘 경로로 변경해줌.
3. 오픈 그래프 태그 설정하기
  - index.html 에 <meta property="og:title/description/image"  ... />
4. 프로젝트 빌드(Build)
  - npm run build