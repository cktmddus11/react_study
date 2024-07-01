// 단락 평가(Short-circuit Evaluation)
// 순서대로 봣을때 첫번째 값만으로도 
// 연산의 결과가 정해져 있으면 뒤에 두번쨰 함수는
// 호출되지 않음.

function returnFalse(){
    console.log("returnFalse");
    return false;
}
function returnTrue(){
    console.log("returnTrue");
    return true;
}

console.log(returnFalse() || returnTrue());


console.log(returnFalse() && returnTrue());
console.log("======================")
console.log(returnTrue() || returnFalse()); // returnTrue만 출력

console.log("======================")
// truthy, falsy 로도 활용가능.

function returnFalse2(){
    console.log("returnFalse");
    return undefined;
}
function returnTrue2(){
    console.log("returnTrue");
    return 1;
}
console.log(returnTrue2() || returnFalse2()); 
console.log(returnFalse2() && returnTrue2());

console.log("======================")
// 단락 평가 활용 사례
function printName(person){
    if(!person){
        console.log("person is null");
        return;
    }
    console.log("person is not null");
}
console.log(printName());
console.log(printName("차승연"));


let person = {
    name : "sy"
}
function printName2(person){ 
    // person 이 널이 아니라면 person.name 을 읽어오게됨.
   console.log(person && person.name);
}
printName2(person); // sy
printName2(); // undefined


console.log("======================")
function printName3(person){ 
    const name = person && person.name;
    console.log(name || "empty value");
}
printName3(); // empty value
printName3(person); // syh