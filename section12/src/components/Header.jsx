import './Header.css';
import Button from './Button';

const Header = ({ title, leftChild, rightChild }) => {
    return <><header className='Header'>
        <div className="header_left">{<Button text={leftChild} />}</div>
        <div className="header_center">{title}</div>
        <div className="header_right">{<Button text={rightChild} />}</div>

    </header></>
}

export default Header;