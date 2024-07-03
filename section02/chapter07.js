// 6가지 요소 조직 메서드

// 1. push
// 배열의 맨뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLegnth = arr1.push(4,5, 6, 7);
console.log(newLegnth); // push 메서드 , 새로 생거난 배열의 길이를 리턴함. 

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환.
let popData = arr1.pop();
console.log(popData);
console.log(arr1);

// 3. shift 
// 배열의 맨 앞에 있는 요소를 제거, 변환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);

// 4. unshift 
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLegnth2 = arr3.unshift(45,66); // 추가한 후 길이를 반환함. 
console.log(newLegnth2, arr4);

// *** 중요, shift, unshift push, pop보다 느리게 동작함
// 맨앞에 추가하기 때문에 각 요소들이 뒤로밀려나기 때문에 느림.

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환.
let arr5 = [1, 2, 3,4, 5];
let newArr5 = arr5.slice(2, 3); // 원하는 위치까지 자르려면 그 인덱스에 +1 해줘야함.
console.log(arr5, newArr5); // [1, 2, 3, 4, 5] [3]
// 원본 배열의 값이 바뀌지 않음.

let newArr6 = arr5.slice(2);
console.log(arr5, newArr6); // [1, 2, 3, 4, 5], [3, 4, 5]
console.log(arr5, arr5.slice(-1)); // 뒤에서 하나만 자르기

// 6. concat 
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let concatArr = [2,3,4 ,4].concat([1, 3,32]);
console.log(concatArr);