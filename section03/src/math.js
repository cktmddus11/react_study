// math 모듈

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
// CommonJS
// 모듈의 내보낼 기능을 정의함
// module.exports = {
//     add : add, 
//     sub
// }


export function divide(a, b){
    return a / b;
}

export default function multiply(a, b){
    return a * b;
}

// ESM
export { add, sub };