function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수 (Callback) 
        // executor 함수
        setTimeout(() => {

            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num is not Number type");
            }
        }, 2000)

    });
    return promise;
}

add10(10)
    .then((value) => {
        console.log(">>> 1. value : " + value); // 20
        return add10(value);
    }).then((value) => {
        console.log(">>> 2. value : " + value); // 30
        return add10("30");
    }).catch((error) => { // then 메서드 어디에서 에러 발생해도 다 잡아줌.
        console.log(error);
    });



// then 메서드
// -> 그 후 처리 동작 작성.
// -> 상태가 성공시에만 처리한다.
// promise.then((value) => {
//     console.log(value);
// }).catch((value) => { // 상태가 실패시에 처리한다.
//     console.log(value);
// })
// then 객체 => promise 객체를 그대로 리턴하기 때문에
// 메서드 체이닝이 가능하다.