import './Button.css';

const Button = ({ text, type, onClick }) => {
    return <button
        onClick={onClick}
        type={type}
        className={`Button Button_${type}`}>{text}
    </button>;
}
export default Button;