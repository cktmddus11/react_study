## React.js를 소개합니다. 
### React.JS란? 
- Meta(Facebook)이 개발한 오픈소스 JavaScript 라이브러리
- 대규모 웹 서비스의 UI를 편하게 개발하기 위해 만들어진 기술


### React의 기술적인 특징
1. 컴포넌트를 기반으로 UI를 표현한다. 
2. 화면 업데이트 구현이 쉽다.
3. 화면 업데이트가 빠르게 처리된다. 


### React의 기술적인 특징 - 1. 컴포넌트를 기반으로 UI를 표현한다. 
- 컴포넌트(Component)
* 구성요소" 라는 뜻
* 화면을 구성하는 요소, UI를 구성하는 요소를 말함
1) 컴포넌트를 기반으로 UI를 표한한다. 
페이지의 각 영역을 컴포넌트화 하여 개발하기 때문에 여러페이지에서 사용하는 부분을 컴포넌트 화하여 중복코드를 줄일 수 있다. 

### React의 기술적인 특징 - 2. 화면 업데이트 구현이 쉽다.
2) 선언형 프로그래밍 - 과정은 생략하고 목적만 간결히 명시하는 방법.(React)
명령형 프로그래밍 - 모든 과정을 하나하나 다 설명. 코드가 길고 복잡함(Javascript)
업데이트를 위한 복잡한 동작을 직접 정의할 필요 없이 특정
변수값을 바꾸는 것만으로도 화면을 업데이트 시킬 수 있다.


### React의 기술적인 특징 -화면 업데이트가 빠르게 처리된다. 
- 브라우저의 렌더링 과정(Critical Rendering Path)   

```plaintext
   HTML ---->    DOM 
                  |
                  V
   JavaScript    Render Tree ---> Layout ----> Painting     
                  ^
                  |
   CSS  ---->  CSSOM    
```

   Javascript는 DOM이 수정되면 이 과정이 다시 반복된다. 
   layout, painting 은 오래걸리는 과정임. 이를 반복하게 되면 
   성능이 나빠질 수 밖에 없음.
   => DOM을 한번만 수정하도록. 
   GOOD : 변경 dom을 string에 변수에 저장해두고    한번에 innerHTML 을 이용해서 한번에 변경시키도록 하기.
   BAD : 변경사항 바로바로 DOM UPDATE

    대규모 서비스가 될수록 이러기 힘듬.
   =>>> react는 이 과정을 자동으로 해줌.
      Virtual DOM !

- Virtual DOM
    가상의 복제 된 DOM에 변경사항을 변경한 후 
    모인 변경사항을 한번에 DOM을 적용함. => DOM 1회 수정.


### 첫 React App 생성하기

```
    npm create vite@latest
```
설치하면 두가지가 보임
- type : module => EJS 방식 사용
- package.json 은 있는데 lock은 없음. 명령을 쳐서
module podules 생성해주기. 
(react app이 생성된 폴더로 이동해서 명령어 쳐야함.)
```
npm install
```


- public - 정적인 파일(이미지, 폰트 등)
- src 
    1. source의 약자. 소스 
        react 확장자? .jsx
    2. 해당경로에도 정적인 파일을 저장할 수는 있음. 하지만 public과 용도가 다름. 추후 배움.
- .eslintrc.cjs - 개발자 코드 스타일 통일 적용
- index.html - 기본 화면 
- vite.config.js - vite 옵션


- react 앱 실행 
>>> package.json > scripts > dev
```
npm run dev
```

### React App 구동원리 살펴보기
- React App 서버 가동.
웹 브라우저가 React Server을 접속하도록 함.
로컬 컴퓨터에서는 port 는 중복 될 수 없음.
http://localhost:5173/




## 프로젝트 구조
Vite를 이용한 React 프로젝트에서 폴더 구조를 설정하는 방식은 프로젝트의 규모, 팀의 선호도, 또는 개발자의 스타일에 따라 달라질 수 있습니다. 하지만 일반적으로 사용하는 폴더 구조를 소개하겠습니다.

### 1. 기본 폴더 구조

```plaintext
my-react-app/
├── public/
│   ├── favicon.svg
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/              # 이미지, 폰트 등 정적 파일
│   ├── components/          # 재사용 가능한 컴포넌트
│   ├── pages/               # 페이지 단위 컴포넌트
│   ├── styles/              # 전역 스타일 시트 (CSS, SCSS 등)
│   ├── hooks/               # 커스텀 React hooks
│   ├── context/             # React context API 관련 파일
│   ├── utils/               # 유틸리티 함수 및 헬퍼 함수
│   ├── App.jsx              # 루트 컴포넌트
│   ├── main.jsx             # 엔트리 포인트 파일 (ReactDOM.render)
│   └── index.css            # 전역 CSS
├── .gitignore               # Git에서 무시할 파일 목록
├── index.html               # 기본 HTML 템플릿
├── package.json             # npm 의존성 관리
├── vite.config.js           # Vite 설정 파일
└── README.md                # 프로젝트 설명 문서
```

### 2. 폴더별 역할

- **`public/`**: `index.html` 같은 정적 파일을 넣는 폴더입니다. 빌드 시 그대로 복사됩니다.
- **`src/`**: 소스 코드가 들어있는 폴더입니다. 대부분의 작업이 이 폴더 내에서 이루어집니다.
  - **`assets/`**: 이미지, 아이콘, 폰트 같은 정적 리소스를 넣습니다.
  - **`components/`**: 작은 UI 요소들을 구성하는 재사용 가능한 React 컴포넌트를 여기에 넣습니다.
  - **`pages/`**: 각각의 페이지에 해당하는 컴포넌트를 넣습니다. 보통 `React Router`를 사용해 페이지를 구성할 때 사용됩니다.
  - **`styles/`**: 전역 스타일 시트를 관리하는 폴더입니다. 프로젝트에서 사용할 CSS 또는 SCSS 파일을 여기에 배치합니다.
  - **`hooks/`**: 커스텀 훅을 정의하는 곳입니다. `useAuth`, `useFetch` 같은 커스텀 훅을 여기에 넣습니다.
  - **`context/`**: `React Context API`를 사용하여 상태를 전역으로 관리할 때, 컨텍스트와 관련된 파일을 여기에 넣습니다.
  - **`utils/`**: 프로젝트 전반에서 사용할 수 있는 유틸리티 함수나 헬퍼 함수를 여기에 넣습니다.
  - **`App.jsx`**: 애플리케이션의 루트 컴포넌트입니다.
  - **`main.jsx`**: 애플리케이션의 엔트리 포인트로, `ReactDOM.createRoot`를 통해 루트 컴포넌트를 마운트합니다.
  - **`index.css`**: 전역 스타일을 정의하는 CSS 파일입니다.
  
### 3. Vite 설정 파일 (`vite.config.js`)

`vite.config.js`는 Vite의 설정을 커스터마이즈할 때 사용됩니다. 예를 들어, alias를 설정하여 경로를 짧게 사용할 수 있습니다:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});
```

위의 설정을 적용하면, `import` 구문에서 상대 경로 대신 절대 경로를 사용할 수 있게 되어 코드가 더 읽기 쉬워집니다:

```javascript
import Header from '@components/Header';
import HomePage from '@pages/HomePage';
```

### 결론

Vite를 이용한 React 프로젝트에서의 폴더 구조는 프로젝트의 유지 보수와 확장성을 고려해 설계하는 것이 중요합니다. 위에서 설명한 구조는 대부분의 프로젝트에서 유용하게 사용할 수 있으며, 필요에 따라 확장하거나 수정할 수 있습니다.