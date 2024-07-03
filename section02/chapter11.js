/* 
[동기] 란?
- 여러개의 작업을 순서대로, 하나씩 처리하는 방식
- 자바스크립트는 기본적으로 동기적으로 실행됨.
*** 쓰레드가 작업을 처리함. 

- 동기는 작업을 순서대로 처리하기 때문에 이전작업이 지연되면
다음 작업까지 실행이 지연되게 된다. 

>> 자바나 C# 같은 언어에서는 멀티스레드 기능을 제공한다. 
여러개의 쓰레드가 각 작업을 동시에 실행하기 때문에 
한 작업이 오래걸려도 전체 프로그램에 영향을 덜 주게 된다. 


- 자바스크립트에는 스레드가 한개만 존재한다.
>>> [비동기] 로 이를 개선할 수 있다.


[비동기]란?
동기적이지 않다는 뜻.
작업을 순서대로 처리하지 않음.

>> 앞선 작업을 기다리지 않고 작업을 동시에 처리할 수 있다. 
*/
let print1 =  (value) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(value);
    }, 1000);
});

async function call(value) {
    const data = await print1(value);
    console.log(data);
   
}

// 1초안에 한번에 1, 2, 3 이 출력된다. 
// call1(1);
// call1(2);
// call1(3);

async function runAll() {
    await Promise.all([call(1), call(2), call(3)]);
}
runAll(); // 약 1초 후에 1, 2, 3이 동시에 출력됨 (모든 작업이 병렬로 실행됨)


// 같은 동작을 하는 함수 정리
// async function call1() {
//     const data = await print1(1);
//     console.log(data);
// }

// async function call2() {
//     const data = await print1(2);
//     console.log(data);
// }

// async function call3() {
//     const data = await print1(3);
//     console.log(data);
// }