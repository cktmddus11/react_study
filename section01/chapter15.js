
// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 => 두 방법 동일함. 
// 아래껄 보통 사용함. 

// 2. 객체 프로퍼티 (객체 속성 )
let person = {
    name : "차승연", 
    age : 27, 
    hobby : "테니스", 
    action : function(){

    }
}

// 3. 객체 프로퍼티 다루는 방법
// 3-1 특정 프로퍼티에 접근( 점 표기법, 괄호 표기법)
console.log(person.age);

console.log(person['age']); // 키쓸때  문자열로 해야됨.
// 프로퍼티에 없는 키값을 요청하면 undefined 출력


// 3-2. 객체 프로퍼티 추가/수정
person.name = '차승연';
person['page'] = 0;
console.log(person.page);

delete person.page;

console.log(JSON.stringify(person));

// 3-3. 프로퍼티 존재 유무 확인 (in 연산자).
let result1 = "name" in person;
console.log(result1); //true