import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// ReactDOM.createRoot - 리액트의 ROOT로 반환함.
// <App> 이라는 컴포넌트를 랜더링한다. 
