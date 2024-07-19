const Controller = ({acions}) => { // 구조분해할당으로 action 분해안함. 너무 많아서
    return <>
        <button onClick={acions.decrementOne}>-1</button> 
        <button onClick={acions.decrementTen}>-10</button> 
        <button onClick={acions.decrementHundred}>-100</button> 
        <button onClick={acions.incrementHundred}>+100</button> 
        <button onClick={acions.incrementTen}>+10</button> 
        <button onClick={acions.incrementOne}>+1</button> 

    </>
};

export default Controller;