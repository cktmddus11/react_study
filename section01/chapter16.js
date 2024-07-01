// 1. 상수객체
const animal = {
    type : "bear",
}
// 상수이므로 이 객체에 다른 object를 할당하는 것은 에러가남.
// animal = {
//     name : "bear",
// }

// 그러나 기존객체의 프로퍼티값을 변경/추가/삭제는 가능함.
animal.name = '곰';
animal.type = "pig";
console.log(JSON.stringify(animal));


// 상수는 새로운 값을 할당하는 것이 불가능한거임.
// 기존에 객체에 변환을 주는거는 가능함.


// 2. 메서드 
// -> 값이 함수인 프로퍼티를 말함. 
// => 객체내의 동작을 정의할 때 이런식으로 구현함.
const person = {
    type : "people", 
    name : function(){
        console.log("hello");
    },
    action : () => {
        console.log("arrow function");
    }, 
    action2(){
        console.log("method");
    }
}
person.action2();
person['action']();