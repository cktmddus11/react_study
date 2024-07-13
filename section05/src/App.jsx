import './App.css'
import Header from './components/Header'; // EJS는 원래 확장자를 jsx 를 
                                              // 필수로 써야하는데 
                                              // vite는 이를 자동으로 처리해줌.
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button'


//컴포넌트 생성시  함수표현식 모두 가능. 
// 또는 클래스도가능한데 코드양이 늘기 때문에 비추
// 컴포넌트 첫글자 대문자 필수. 
function App() {
  const buttonProps = {
      text : "메일", 
      color : "red", 
      a : 1, 
      b : 2
  };
  const buttonProps2 = {
    text : "블로그", 
    color : "blue", 
    a : 1, 
    b : 2
};
  return ( 
    // 컴포넌트 안에 컴포넌트. 같이 랜더링됨. 부모,자식 컴포넌트. 계층구조
    // App 컴포넌트를 항상 부모로 두고 하위로 자식 컴포넌트가 있는 구조.
    // 관례상 APP이 루트로 쓴다.
    <>
    {
    /* <Header/> 
    <Main />
    <Footer /> */}

      {/* props 를 계속 이어서 쓰지말고 객체를 전달하기 */}
{/* 
      <Button text={"메일"} color={"red"}/>  
      <Button text={"블로그"} color={"blue"}/>
      <Button text={"카페"}/> */}

      <Button {...buttonProps}/>  
      <Button {...buttonProps2}/>
      <Button />
      <Button text="카페">
          <div>자식요소</div>
      </Button>


    </>
  )
}
// html 을 반환하는 function 을 컴포넌트라고 부름
export default App
