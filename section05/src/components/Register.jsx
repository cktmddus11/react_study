import { useState } from 'react';
import { useRef } from 'react';

// 간단 회원가입폼
// 1. 이름
// 2. 생년월일 
// 3. 국적
// 4. 자기소개

const Register = () => {
    // state를 객체로 관리. 여러개의 상태를 한번에 관리.
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const countRef = useRef(0);
    const inputRef = useRef();
    // console.log(countRef);
    // console.log("Register Rendering " + countRef.current); 
    // 화면을 렌더링하지 않고 값을 저장해야할 떄.
    // Q. 그냥 js코드 count를 선언해서 change함수에서 
    // 증감시키면 되지않을 까? 
    // A. 화면에 값을 변경해서 리렌더링이 되면 
    // 화면의 코드 또한 리렌더링 되기때문에 값이 증가되는게 아니라
    // 초기화한 값이 계속 되게 된다. 이때문에 useRef를 사용해야함. 
    // Q. 그럼 Register컴포넌트 밖에더 count를 선언하면???
    // A. counter로 써 정상 동작은 하게 된다. 하지만 App컴포넌트에서 Register을 여러개 랜더링 하게 되면
    // 저 counter변수가 공통으로 사용되기때문에 첫번쨰 폼 수정 후 두번째 폼에서 수정하면 counter가 2로 오동작하게 된다. 


    // 통합 이벤트 헨들러
    const onChange = (e) => {
        countRef.current++; // 값을 변경 할때마다 변경 횟수를 저장하기 위해.
        console.log(countRef.current);
       // console.log(e.target.name, e.target.value);
        setInput({
            ...input, // 객체를 나열
            [e.target.name]: e.target.value,

        })
    }


    const onSubmit = () =>{
        if(input.name === ""){
            // 이름을 입력하는 DOM 요소에 포커스.
            console.log(inputRef.current); // <input type="text" name="name" placeholder="이름" value="">
            inputRef.current.focus();
        }
    }

    return (
        <>
            {/* <div>
                <button
                    onClick={() => {
                        refObj.current++;
                        console.log(refObj.current);
                    }}>
                    ref+1
                </button>
            </div> */}
            <div>
                <input 
                    ref={inputRef}
                    type="text" name="name"
                    placeholder={"이름"}
                    value={input.name}
                    onChange={onChange} /> {input.name}
            </div>
            <div>
                <input type="date" name="birth"
                    placeholder={"생년월일"}
                    onChange={onChange}
                    value={input.birth} /> {input.birth}
            </div>
            <div><select name="country"
                value={input.country}
                onChange={onChange}>
                <option value=""></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="jp">일본</option>
            </select>  {input.country}
            </div>
            <div>
                <textarea type="text" name="bio"
                    placeholder={"자기소개"}
                    onChange={onChange}
                    value={input.bio} /> {input.bio}
            </div>

            <button onClick={onSubmit}>제출</button>

        </>
    )
}
export default Register;