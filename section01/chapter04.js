console.log("chapter04");


// 1. 변수 
let age = 27;  // 변수를 선언하고 초기화한다. 
age = 32;
console.log(age);

// 값을 바꿔가며 사용함.
// let age; 


// 2. 상수
// 한번 저장한 값을 바꿀 수 없음.
const birth = "2222.22.22";
// birth = "13423"; //Uncaught TypeError: Assignment to constant variable.
console.log(age);
//const day; // 무조건 초기화해야함. // 'const' declarations must be initialized.


// 3. 변수 명명 규칙(네이밍 규칙)
// 3-1 $, _ 제외한 기호는 사용할 수 없다.
let $_name;
// 3-2. 숫자로 시작 할 수 없다. 

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
// 의미있는 변수명으로 짓기
let salesSum = 3;