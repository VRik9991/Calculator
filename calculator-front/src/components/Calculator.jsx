import {useState} from "react";
import KeyBoard from "../KeyBoard";

const displayStyle = {
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '4.5rem',
    padding: '0.6rem 1rem',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',      // 👈 теперь текст слева
    background: 'linear-gradient(180deg, #ffffff, #f3f6fb)',
    boxShadow: '0 6px 18px rgba(12,25,40,0.08)',
    border: '1px solid rgba(12,25,40,0.06)',
    fontFamily: "'SFMono-Regular', ui-monospace, 'Roboto Mono', Menlo, monospace",
    color: '#0b1730',
    fontSize: 'clamp(18px, 3.5vw, 40px)',
    letterSpacing: '0.6px',
    lineHeight: '1.05',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    transition: 'all 180ms ease',
};

const actions = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    ":": (a, b) => a / b
}
let url = "http://localhost:8000/"

function Calculator() {
    const [a, setA] = useState(null);
    const [action, setAction] = useState(null);
    const [display, setDisplay] = useState('');
    const buttonCallback = (button_text) => () => {
        setDisplay(display + button_text)
    }
    const actionCallBack = (button_text) => () => {
        setA(Number(display))
        setAction(button_text)
        setDisplay("")
    }
    const equalCallback = (button_text) => () => {
        setDisplay(actions[action](a, Number(display)))
        let data = {
        a: a,
        action: action,
        b: Number(display)}
        fetch(url,{
            method: 'POST',
            body: {a: a,
                b: Number(display),
                operation: action},
        }).then(response => {
            console.log(response)
        })}

    return (
        <div>
            <div style={displayStyle}>{display}</div>
            <KeyBoard
                buttonCallback={buttonCallback}
                actionCallBack={actionCallBack}
                equalCallback={equalCallback}/>
        </div>
    )


}

export default Calculator;