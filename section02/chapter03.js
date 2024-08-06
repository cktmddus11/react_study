// 구조 분해 할당.


// 1. 배열의 구조분해 할당.
let arr = [1,2, 3];
let [one, two, three, four, five = 5] = arr;
console.log(one, two , three, four, five);


// 2. 객체의 구조분해 할당
let person = {
    name :"sy",
    age : 17,
    hobby : "coding"
}

let { name, age, hobby} = person;
console.log(name, age, hobby);

let {
    age : myage,
} = person;

console.log(myage);

// 3. 객체의 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({age, name, hobby}) => {
    console.log(name, age, hobby);

}
func(person);