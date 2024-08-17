import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* 페이지 라우팅을 루트 컴포넌트로 설정하면 하위 컴포넌트들이 
                    페이지 라우팅과 관련된 모든 정보를 공급받게 된다. 
                    */}
    <App />
  </BrowserRouter>,
)
