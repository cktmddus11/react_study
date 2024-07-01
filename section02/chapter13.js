/* promise 란? 
* 비동기작업을 효율적으로 처리할 수 있도록 
* 도와주는 자바스크립트의 내장 객체.
* 
setTimeOut 같은 비동기 작업을 감싸는 객체
- *** 작업 실행
- *** 작업 상태 관리
- *** 작업 결과 저장.
- 작업 병렬 실행
- 작업 다시 실행
- 기타 등등.

1) 상태        
                  resolve
대기 (Pending) ----------> 성공(Fulfilled)
               ----------> 실패(Rejected)
                   reject

*/

                               
const promise = new Promise(() => {
    // 비동기 작업 실행하는 함수 (Callback) 
    // executor 함수

    setTimeout(() => {
        console.log("hello");
    }, 2000)
});
console.log(promise); // 객체 출력 후 callback함수 실행됨.
// 내부 프로퍼티를 살펴보면 
// PromiseState : "pending"
// PromiseResult  undefined

console.log("======================");
                            // 매개변수 성공, 실패 상태로 바꾸는 함수 포함.
const promise2 = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 (Callback) 
    // executor 함수

    setTimeout(() => {
        console.log("hello");
        resolve();
    }, 2000)
});



setTimeout(() => {
    console.log(promise2);
}, 3000);
// 내부 프로퍼티를 살펴보면 
// PromiseState : "fulfilled"
// PromiseResult  undefined
// result 를 전달해주기 위해서는 resolve 함수의 인자로 전달해줘야함.



console.log("======================");
                            // 매개변수 성공, 실패 상태로 바꾸는 함수 포함.
const promise3 = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 (Callback) 
    // executor 함수

    setTimeout(() => {
        console.log("hello");
        resolve("ok");
    }, 2000)
});



setTimeout(() => {
    console.log(promise3);
}, 3000);
// PromiseState : "fulfilled"
// PromiseResult  "ok"


console.log("======================");
                            // 매개변수 성공, 실패 상태로 바꾸는 함수 포함.
const promise4 = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 (Callback) 
    // executor 함수

    const num = 10;

    if(typeof num === 'number'){
        resolve(num + 10);
    }else {
        reject("num is not Number type");
    }
    // setTimeout(() => {
    //     console.log("hello");
    //     reject("fail because...");
    // }, 2000)
});



setTimeout(() => {
    console.log(promise4);
}, 3000);
// chapter13.js:88 Uncaught (in promise) fail because...
// PromiseState : "rejected"
// PromiseResult  "fail because..."
