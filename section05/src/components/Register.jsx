import { useState } from 'react';

// 간단 회원가입폼
// 1. 이름
// 2. 생년월일 
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState();
    const [country, setCountry] = useState();
    const [bio, setBio] = useState();



    const onChangeName = (e) => {
        //console.log(e);
        setName(e.target.value);
    }
    const onChangeBirth = (e) => {
        //console.log(e);
        setBirth(e.target.value);
    }
    const onChangeCountry = (e) => {
        //console.log(e);
        setCountry(e.target.value);
    }
    const onChangeBio = (e) => {
        //console.log(e);
        setBio(e.target.value);
    }



    return (
        <>
            <div>
                <input type="text"
                    placeholder={"이름"}
                    value={name}
                    onChange={onChangeName} /> {name}
            </div>
            <div>
                <input type="date"
                    placeholder={"생년월일"}
                    onChange={onChangeBirth} 
                    value={birth} /> {birth}
            </div>
            <div><select 
                value={country}
                onChange={onChangeCountry}>
                    <option ></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="jp">일본</option>
                </select>  {country}
            </div>
            <div>
                <textarea type="text"
                 placeholder={"자기소개"}
                 onChange={onChangeBio}
                 value={bio} /> {bio}
            </div>

            
        </>
    )
}
export default Register;