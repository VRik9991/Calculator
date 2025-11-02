import {useState} from "react"

const buttonStyle = {
    margin: "2.5px 2.5px",
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: '#2563eb',
    color: '#fff',
    borderRadius: '6px',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.2s, transform 0.1s',
};

const hoverStyle = {
    backgroundColor: '#1d4ed8',
};

const activeStyle = {
    backgroundColor: '#1e3a8a ',
    transform: 'scale(0.97)',
};


function Button({text, callback}) {
    const [state, setState] = useState('normal');
    const style = {
        ...buttonStyle,
        ...(state === 'hover' ? hoverStyle : {}),
        ...(state === 'active' ? activeStyle : {}),
    }
    return (
        <div
            onClick={callback}
            style={style}
            onMouseEnter={() => setState('hover')}
            onMouseLeave={() => setState('normal')}
            onMouseDown={() => setState('active')}
            onMouseUp={() => setState('hover')}
        >{text}</div>
    )
}

export default Button;