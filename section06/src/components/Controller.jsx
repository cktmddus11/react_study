const Controller = ({countAction}) => { // 구조분해할당으로 action 분해안함. 너무 많아서
    return <>
        <button onClick={() => {
            countAction(-1);
        }}>-1</button> 
        <button onClick={() => {
            countAction(-10);
        }}>-10</button> 
        <button onClick={() => {
            countAction(-100);
        }}>-100</button> 
        <button onClick={() => {
            countAction(+100);
        }}>+100</button> 
        <button onClick={() => {
            countAction(+10);
        }}>+10</button> 
        <button onClick={() => {
            countAction(+1);
        }}>+1</button> 

    </>
};

export default Controller;