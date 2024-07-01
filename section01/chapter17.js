// 배열 
// 여러개의 값을 순차적으로 담을 수 있는 자료형.


// 1. 배열 생성
let arrA = new Array(); // 배열 생성자.
let arrB = {}; // 배열 리터럴

let arrC = ["A", "B", "C"];
console.log(arrC);

let arrD = ["A", 2, "C"]; // 자료형에 구애받지 않음.
console.log(arrD);

// 2. 배열 접근.
arrC[0] = "D";
console.log(arrC);
