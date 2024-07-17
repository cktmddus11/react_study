# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Counter App 컴포넌트 계층 구조 
    부모    App 
    자식  Viewer      Controller
    
    >> Viewer에서 useState???
    Viewer에서 useState를 이용해서 현재 counte하고 있는 값을 
    관리한다해서 Controller에서는 이 count의 값을 버튼을 누를때마다 
    증가 시켜줘야하기 때문에 setCount 는 Controller컴포넌트에서 이루어져야한다. 
    즉, setCount를 props 를 이용해서 전달해줘야하는데 이는 자식 컴포넌트간에서는 불가능하다. 
    따라서 부모인 App에서 useState를 이용해서 state를 관리하고 이 값을 props를 이용해 자식 객체에게 전달해줘야한다.