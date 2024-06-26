/**
 * 원시타입
 * 
 *  Number, String, Boolean, Null, Undefined
 * 
 * 객체타입
 *  
 *  Object -> Array, Function, RegexExp
 * 
 * 
 * **/

// 1. Number Type
let num1 = 25;
let num2 = 1.4;
let num3 = -23;

let inf = Infinity; // Infinity 양의 무한대
let mInf = -Infinity; // 음의 무한대
console.log(">>> "+inf);

let nan = 1 * "hello";
console.log(">>> "+nan); // 계산에 실패 했을 때 Nan


// 2. String Type
let myName = "name";
let myName2 = "name2";
let name = myName + myName2;
console.log(">>> "+name);


// 템플릿 리터럴 문법 -> 실무 자주 사용 
let text = `${myName}`; // `` 를 사용하면 변수를 넣어 동적인 문자열을 저장할 수 있다.
console.log(">>> "+text); 

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type(아무것도 없다.)
let empty = null;
console.log(empty);

// 5. Undefined Type
// 값이 할당되지 않은 값에 자동으로 할당되는 값.
let none;
console.log(none);

// null과 Undefined 차이
// null은 개발자가 직접 초기화한 값으로 값이 없다는 의미
// Undefined 미처 할당하지 않았거나 알 수없는 이유로 값이 없을 할당하지 않았을때