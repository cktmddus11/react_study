/* const Button = (props) => {
    console.log(props);
    return <button
        style={{ color: props.color }}>
        {props.text} - {props.color.toUpperCase()} 
    </button>        // propos가 부모컴포넌트에서 전달되지 않을 수도 있기떄문에
}                       // props.color.toUperCase() 같은 처리를하면 오류가 발생할 수있어 위험함.

*/
// 구조분해할당으로 props 를 읽어오기
// const Button = ({text, color }) => {
//     console.log(text +","+ color);
//     return <button
//         style={{ color: color }}>
//         {text} - {color.toUpperCase()} 
//     </button>      
// }   
const Button = ({text, color , a, b, children}) => {
    console.log(text +","+ color);
    return <button
        style={{ color: color }}>
        {text} - {color.toUpperCase()} 
        {children}
    </button>      
}           

Button.defaultProps = { // 기본값을 지정해주면 안전함.
    color : "black"
}
export default Button;