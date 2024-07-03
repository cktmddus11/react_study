// async 
// 어떤 함수를 비동기 함수로 만들어주는 키워드.
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드.+

async function getData() {
    return {
        name: "이정환",
        id: "winterlood",
    }
}

console.log(getData());
// Promise {<fulfilled>: {…}}
// [[Prtotype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Object


async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환",
                id: "winterlood",
            })
        }, 1500)
    })

}
console.log(getData2());
// getData2().then((value) => {
//     console.log(value);
// })


// await 
// async 함수 내부에서만 사용이 가능한 키워드.
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData(){
   const data =  await getData2();
   // 비동기 함수가 처리된 결과값을 
   // 동기 함수처럼 쉽게 사용할 수 있음.
   console.log(">>> "+JSON.stringify(data));
}
printData();