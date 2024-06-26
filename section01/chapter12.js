// 1. 함수 표현식 
function funcA(){
    console.log("funcA");
}
let varA = funcA;
console.log(varA);
varA();
// 함수를 변수화 할 수 있다. 


let varB = function(){ 
    // 이름이 없는 함수 => 익명함수
    console.log("funcB"); 
}
varB();


// 2. 화살표 함수
let varC = () => {
    return 1;
}
console.log(varC());

let varD = () => 2;
console.log(varD());



let varE = (value) => value + 2;
console.log(varE(4));