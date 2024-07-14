import { useState } from 'react';

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

    // 통합 이벤트 헨들러
    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        setInput({ 
            ...input, // 객체를 나열
            [e.target.name] : e.target.value,

        })
    }

    return (
        <>
            <div>
                <input type="text" name="name"
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
                <textarea type="text"  name="bio"
                    placeholder={"자기소개"}
                    onChange={onChange}
                    value={input.bio} /> {input.bio}
            </div>


        </>
    )
}
export default Register;