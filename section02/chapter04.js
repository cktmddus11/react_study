// Spread 연산자와 Rest매개변수
// 1. Spread 연산자
// -> Spread : 흩뿌리다. 펼치다. 
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩부려주는 역할

let arr1 = [1,2, 4];
let arr2 = [1,2, 4];

let arr3  = [...arr1, ...arr2];
console.log(arr3);


let obj1 = {
    name :"asdf", 
    age : 12
}
let obj2 = {
    ...obj1, 
    desc : "asdfsd"
}
console.log(obj2);


function funcA({name, age, desc}) {
    console.log(name);
    console.log(age);
    console.log(desc);

}
funcA(obj2);



function funcB(A, B, C) {
    console.log(A);
    console.log(B);
    console.log(C);

}
funcB(...arr2);



// function funcC(name, age, desc) {
//     console.log(name);
//     console.log(age);
//     console.log(desc);

// }
// funcC(...obj2);
// 객체는 구조분해할당해서 매개변수로 전달안되네.
//
console.log("==============================");

// 2. Rest 매개변수
// => Rest 는 나머지, 나머지 매개변수
// 매개변수를 한번에 rest 를 이용해 배열에 담아둘 수 있음.
// 주의 : rest 매개변수 뒤에는 일반 매개변수가 더 올수 없게 됨.
// 꼭 rest라는 이름으로 안해도되고 아무이름 붙여도되는거. 앞에 ...으로만시작하면됨.
function funcB(one, ...rest) {
    console.log(rest, one);
}
funcB(...arr1, ...arr2);