# React Context

## Context란?
- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존의 Props가 가지고 있던 단점을 해결할 수 있음.


## Props단점
- 1. Props Drilling : 부모 => 자식으로만 데이터를 전달 할 수 있음. 
ex) App => ChildA => ChildB 
     바로 App => ChildB가 불가능.