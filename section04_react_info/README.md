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