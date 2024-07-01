// 형변환(Type Casting)
/* - 묵시적 형변환
        개발자가 직접 설정하지 않아도 
        알아서 자바스크립트 엔진이 형변환 하는 것을 말함.

    - 명시적 형 변환
        개발자가 직접 함수 등을 이용해 
        형 변환을 이용함.

*/

// 1. 묵시적 형변환
let num = 10;
let str = "20";
const result = num + str;
console.log(result); // 1020 
// 묵시적으로 num이라는 숫자값이 string 으로 형변환됨.



// 2. 명시적 형변환.
// => 프로그래머 내장 함수 등을 이용해서 직접 형 변환을 암시
// => 문자열 -> 숫자
let str1 = "10";
let str1Number = Number(str1);
console.log(str1Number + 20);

let str2 = "10개";
let str2Number = Number(str2);
console.log(str2Number); // NaN 수치연산 실패
console.log(parseInt(str2)); // parseInt 사용하면 성공적으로 숫자로 변환됨.



// -> 숫자 => 문자열
let num1 = 20;
let num1String = String(num1);
console.log(num1String+"10");