import "./main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 랜더링 된다. 
// 3. 모든 태그는 닫혀있어야 한다. 
// 4. 최상위 태그는 반드시 하나여야만 한다. 
const Main = () => {
  // const number = 7;
  const user = {
    name: "차승연",
    isLogin: true
  };
  // return (   // 최상위 태그를 할게 없으면 <> <> 만으로 도 가능
  //   <>
  //     {
  //       user.isLogin ? (
  //         <div>로그아웃</div>
  //       ) :
  //         (<div>로그인</div>)
  //     }
  // </>
  //)
    
  if(user.isLogin){
    return <div className="logout" // class 를 못써서 className
    //  style = {{
    //   backgroundColor : "blue",
    //   borderBottom : "5px solid red"
    // }}
    >
      로그아웃
      </div>
  }else{
    return <div>로그인</div>
  }
  // jsx style 지정 
  // 1. 직접 style 지정. css 처럼 데쉬 쓰는게 아니라 카멜케이스 적용.
  // => 가독성 안좋음.
}
export default Main;


 {/* <img></img>
        <h1>Main</h1>
        <h2>{number % 2 == 0 ? "짝수" : "홀수"}</h2>
        {[1, 2, 4]}
        {null}
        {"안녕"} */}