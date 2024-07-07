// CJS 를 이용해 모듈 불러오기
//const moduleData = require("./math.js"); 
// 객체 구조분해 할당 이용
//const { add, sub } = require("./math.js");

// ESM 을 이용해 모듈 불러오기
// 파일은 확장자까지 꼭 써야함.
//import {add, divide, sub} from "./math.js";

// export default 를 이용해 내보낸 함수는 아래와 같이 별도로 호출해서 사용
// 함수의 이름을 사용자임의로 변경해서 호출해도됨.
//import multiply from "./math.js";
//import mul from "./math.js";

// 이렇게 한번에 호출도 가능.
import mul, {add, sub, divide} from './math.js';

console.log("안녕 Node.js");
//console.log(moduleData); // { add: [Function: add], sub: [Function: sub] }


//console.log(moduleData.add(1 , 2));
//console.log(moduleData.sub(4, 2));

console.log(add(1, 2));
console.log(sub(4, 2));
console.log(divide(10, 5));
console.log(mul(10, 5));


console.log("===========");
// random color library
import randomColor from 'randomcolor'; // import the script

const color = randomColor(); // a hex code for an attractive color
console.log(color);