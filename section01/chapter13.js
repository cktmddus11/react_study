// 콜백함수 
/* 
자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함.

원하는 부분에서 콜백함수를 호출하도록 사용함.
*/

function main(value) {
    console.log("1");
    console.log("2");
    value();
}

function sub() { // main 에 sub라는 인수로써 전달됨 => 콜백함수 
    console.log("sub");
}
main(sub);


function main2(value) {
    console.log(value);
    console.log(value());
}
main2(sub);

console.log("====================");

main2(function () {
    return ">>> 1";
});

console.log("====================");
function main3(value) {
    console.log(value);
    console.log(value());
}
main3(() => 1);

console.log("====================");
// 2. 콜백 함수의 활용 => 중복 코드를 줄일 수 있음.
// function repet(count){
//     for(let idx = 1; idx <= count; idx++){
//         console.log(idx);
//     }
// }
// function repetDouble(count){
//     for(let idx = 1; idx <= count; idx++){
//         console.log(idx * 2);
//     }
// }
// repet(5);
// repetDouble(5);

function repet(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
       callback(idx);
    }
}

repet(5, function(idx) {
    console.log(idx);
})
repet(5, function(idx) {
    console.log(idx * 2);
});

repet(5, (idx) => {
    console.log(idx * 3);
})