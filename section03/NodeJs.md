## Node.js 시작
리액트 하는데 Nodejs를 왜 알아야할까? 
 
``` 
     React.js, Next.js, Vue.js, Svelte 등 
     Node.js기반 언어.
```

### Node.js란? 
 - 자바스크립트 실행환경(Runtime) = 구동기
 - 웹페이지 내부에 필요한 아주 단순한 기능만을 개발하기 위해 만들어짐.
 - 문법이 매우 유연하게 설계되어서 생산성이 매우높다.    
          => 이때문에 웹브라우저 밖에서도(웹서버등) 
        자바스크립트를 사용하고자 하는 니즈가 생김  
          => Nodejs가 생기며 자바스크립트를 범용적으로 
        사용할 수 있게 됨.



### Node Js에서의 프로젝트 
=> 프로그램의 단위를 [패키지] 라고 부름


### npm run start
- package.json 에 추가
- script 에 start명령어 추가
    - 특정경로에 파일을 실행시킬 때 경로가 길어지면 명령어도 그에맞는 명령어로 시작해야하기 때문에 자주사용하는 경로의 파일을 실행시키기 위해서 
 매크로 명령어를 추가해줌.
```
"start": "node src/index.js"  
>>> node src/index.js => npm run start
```



## 모듈(Module)이란?
- 각 기능별로 분리된 폴더

### Javascript 의 모듈 시스템
- Common JS(CJS)
- ES Module(ESM)


### CJS => ESM 변경
- package.json 에 추가
- 모듈 시스템을 여러개 사용할 수 없음. 이 강의에서는 EMS으로 진행.
```
  "type" : "module"
```

## 라이브러리 사용하기 
### 라이브러리란 ? 
- 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해놓은 것 

### 라이브러리 사용하기 
- (https://www.npmjs.com/) 에서 원하는 라이브러리 설치 
- package.json 에 dependencies에 추가된 라이브러리가 작성된다.
- node_modules : 라이브러리 저장된 곳
- package-lock.json : package.json 보다 더 정확하게 버전을 작성해둔 파일
```
package.json => version : ^0.6.2 => 해당 버전이상 버전을 설치함의 의미
package-lock.json => version : 0.6.2 해당 버전을 설치함.
```

- node_modules 폴더, package-lock.json 파일이 
지워지더라도
npm install 명령어를 통해서 
package.json dependencies 에 기록된 라이브러리를 다시 설치할 수 있다.