import './Button.css';

const Button = (props) => {
    return (
        <button type={props.type} onclick={props.onclick}>
            {props.children}
        </button>
    )
}

export default Button;