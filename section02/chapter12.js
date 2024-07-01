// 비동기 작업 처리하기

function task(){
    setTimeout(() =>{
        console.log("hello");
    }, 3000);
}
task(); // 3초 뒤에 출력



function add(a, b, callback){
    setTimeout(() => {
        const sum = a + b;
       // console.log(sum);
       callback(sum);
    }, 3000);
}
add(2, 4, (value) => {
    console.log(">>> "+value);
});