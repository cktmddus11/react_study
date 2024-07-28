# TODO LIST 프로젝트 

## 컴포넌트 구성
```
        APP               => state
             Header 
             Editor 
             List 
                   todoItem   
```


# 기억하기
## useState 이용
자식 컴포넌트간에는 값 전달이 불가능하다.
- 부모컴포넌트인 APP에서 todo 데이터를 저장하고 있음.
- 글은 editor에서 작성하고 app컴포넌트에 있는 todo에 저장해야하기 때문에 부모에서 setTodo 가 가능한 onCreate 메서드를 넘겨줌. editor컴포넌트에서는 입력할때마다 상태를 저장하기 위해 내부 state에서 입력값을 저장하다가 onSubmit 를 호출하며 onCreate 메서드에 입력한 값을 넘겨줌.



## useRef 활용
컴포넌트 변수 관리하기. 어떤 경우에도 리렌더링 되지 않기 때문에
id 값이나 DOW 요소 조작이 필요할 떄 화면에 값을 저장해야할떄.
- todo 리스트의 id 값을 저장하기 위해 사용
- editor의 dow focus 조작을 위해 사용