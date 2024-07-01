// 비동기 작업의 결과를 또다른 비동기 작업의 인수로
// 넘겨주는 것도 가능하다.

// 음식을 주문하는 사람
function orderFood(callback){
    setTimeout(() => {
        const food = "candy";
        callback(food);
    }, 3000); // 3초 후에 콜백함 수 호출됨. 
}
function cooldownFood(food, callback){
    setTimeout(() => {
        const cooldownFood = `cool ${food}`;
        callback(cooldownFood);
    }, 2000)
}

function frozenFood(food, callback){
    setTimeout(() => {
        const frozenFood = `frozen ${food}`;
        callback(frozenFood);
    }, 4000)
}


// 그렇기 때문에 계속 들여쓰기가 발생해버림. 
// 이를 Promise를 이용해 개선 가능함.
orderFood((food) => {
    console.log(food+" food arrived");

    cooldownFood(food, (cooldownFood) => {
        console.log(cooldownFood + " arrive ");


        frozenFood(cooldownFood, (frozenFood) => {
            console.log(frozenFood +" arrive");
        })
    })
});