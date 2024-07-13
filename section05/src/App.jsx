import './App.css'
import Header from './components/Header'; // EJS는 원래 확장자를 jsx 를 
                                              // 필수로 써야하는데 
                                              // vite는 이를 자동으로 처리해줌.
import Main from './components/Main';
import Footer from './components/Footer';


//컴포넌트 생성시  함수표현식 모두 가능. 
// 또는 클래스도가능한데 코드양이 늘기 때문에 비추
// 컴포넌트 첫글자 대문자 필수. 
function App() {
  return ( 
    // 컴포넌트 안에 컴포넌트. 같이 랜더링됨. 부모,자식 컴포넌트. 계층구조
    // App 컴포넌트를 항상 부모로 두고 하위로 자식 컴포넌트가 있는 구조.
    // 관례상 APP이 루트로 쓴다.
    <>
    <Header/> 
    <Main />
    <Footer />

    </>
  )
}
// html 을 반환하는 function 을 컴포넌트라고 부름
export default App
